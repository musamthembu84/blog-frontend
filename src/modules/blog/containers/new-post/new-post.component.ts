import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {HttpHeaders} from '@angular/common/http'
import {BloggingService} from "@modules/blog/services/blogging.service";
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
    selector: 'sb-new-post',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './new-post.component.html',
    styleUrls: ['new-post.component.scss'],
})
export class NewPostComponent implements OnInit {

//    form: any;
    constructor(private blogSerivce: BloggingService ) {

    }

    ngOnInit() {}

    // createPost(){
    //     this.blogSerivce.creatingPosts(this.form)
    //     .subscribe(res=>{
    //         console.log("Post created successfully")
    //     })
    // }

}
