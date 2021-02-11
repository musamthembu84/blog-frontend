import { Component, OnInit } from '@angular/core';
import {BloggingService} from "@modules/blog/services/blogging.service";

@Component({
  selector: 'sb-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.scss']
})
export class SinglepostComponent implements OnInit {

    currentPost = null;
  constructor(private bloggingService:BloggingService) { }

  ngOnInit(): void {
  }

  readPost(id : BigInteger): void {

      this.bloggingService.readEachPost(id)
          .subscribe(
              post => {
                  this.currentPost = post;
                  console.log(post);
              },
              error => {
                  console.log(error);
              }
          )

  }
}
