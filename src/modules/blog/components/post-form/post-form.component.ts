import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Post } from '@modules/blog/models';
import { BlogService } from '@modules/blog/services';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import {BloggingService} from "@modules/blog/services/blogging.service";


@Component({
    selector: 'sb-post-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './post-form.component.html',
    styleUrls: ['post-form.component.scss'],
})
export class PostFormComponent implements OnInit {

    newPostForm!: FormGroup;
    @Input() post?: Post;

    constructor(
        private fb: FormBuilder,
        private blogService: BlogService,
        private bloggingService: BloggingService
    ) {}
    ngOnInit() {
        this.newPostForm = new FormGroup({
          heading: new FormControl('', [Validators.required]),
          subHeading: new FormControl('', [Validators.required]),
          body: new FormControl('', [Validators.required]),
        })
    }

    createNewPost(): void {
        const data = {
            content: this.newPostForm.get('body').value,
            title: this.newPostForm.get('heading').value,
            sub_content: this.newPostForm.get('subHeading').value
        }

        this.bloggingService.creatingPosts(data)
            .subscribe(
                response =>{
                    console.log(response);
                },
                error => {
                    console.log(error);
                }
            )
    }

    onSubmit() {
        this.createNewPost();
    }


    /* Accessor Methods */

    // heading
    get headingControl() {
        return this.newPostForm.get('heading') as FormControl;
    }

    get headingControlValid() {
        return this.headingControl.touched && !this.headingControlInvalid;
    }

    get headingControlInvalid() {
        return (
            this.headingControl.touched &&
            (this.headingControl.hasError('required') || this.headingControl.hasError('heading'))
        );
    }

    // subHeading
    get subHeadingControl() {
        return this.newPostForm.get('subHeading') as FormControl;
    }

    get subHeadingControlValid() {
        return this.subHeadingControl.touched && !this.subHeadingControlInvalid;
    }

    get subHeadingControlInvalid() {
        return (
            this.subHeadingControl.touched &&
            (this.subHeadingControl.hasError('required') ||
                this.subHeadingControl.hasError('subHeading'))
        );
    }

    // body
    get bodyControl() {
        return this.newPostForm.get('body') as FormControl;
    }

    get bodyControlValid() {
        return this.bodyControl.touched && !this.bodyControlInvalid;
    }

    get bodyControlInvalid() {
        return (
            this.bodyControl.touched &&
            (this.bodyControl.hasError('required') || this.bodyControl.hasError('body'))
        );
    }
}
