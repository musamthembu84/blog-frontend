import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { AuthUtilsService } from '@modules/auth/services';
import { Post } from '@modules/blog/models';
import { BlogService } from '@modules/blog/services';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'sb-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.component.html',
    styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {

    ngOnInit() {
        // this.posts$ = this.blogService.getPosts$();
        //
        // this.subscription.add(
        //     this.authUtilsService.isLoggedIn$().subscribe(isLoggedIn => {
        //         this.isLoggedIn = isLoggedIn;
        //         this.changeDetectorRef.detectChanges();
        //     })
        // );
    }

}
