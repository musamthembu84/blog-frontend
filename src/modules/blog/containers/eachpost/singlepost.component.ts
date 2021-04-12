import { Component, OnInit } from '@angular/core';
import {BloggingService} from "@modules/blog/services/blogging.service";

@Component({
  selector: 'sb-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.scss']
})
export class SinglepostComponent implements OnInit {

  data = ''
  constructor(private bloggingService:BloggingService) { }

  ngOnInit(): void {
   this.readPost();
  }

  readPost(){
  this.bloggingService.readEachPost(9)
             .subscribe(
                 post => {
                     this.data = post;

                     console.log(JSON.stringify(this.data.title));
                 },
                 error => {
                     console.log(error);
                 }
             )
  }


}
