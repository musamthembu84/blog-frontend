import { Component, OnInit } from '@angular/core';
import {BloggingService} from "@modules/blog/services/blogging.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'sb-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.scss']
})
export class SinglepostComponent implements OnInit {

  id: number;
  data = ''
  constructor(
  private bloggingService:BloggingService,
  private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
       this.bloggingService.readEachPost(this.route.snapshot.paramMap.get('post_id'))
                    .subscribe(
                        post => {
                            this.data = post;
                        },
                        error => {
                            console.log(error);
                        }
       )
  }
}
