import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import {BloggingService} from "@modules/blog/services/blogging.service";
import { AuthUtilsService } from '@modules/auth/services';
import { Post } from '@modules/blog/models';
import { BlogService } from '@modules/blog/services';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'sb-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {

    posts: any;

    constructor(private blogService: BloggingService) {
    }
    ngOnInit() : void {
        this.readAll();
    }

    readAll(): void {
        this.blogService.readAll()
            .subscribe(
                posts => {
                    this.posts = posts;
                    console.log(posts);
                },
                myerrors => {
                    console.log(myerrors);
                }
            )
    }

    edit(): void{

    }

    viewSinglePost(): void{

    }
}
