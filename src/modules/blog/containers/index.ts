import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import {SinglepostComponent} from  './eachpost/singlepost.component';

export const containers = [HomeComponent, PostComponent, AboutComponent, NewPostComponent, EditPostComponent, SinglepostComponent];

export * from './home/home.component';
export * from './post/post.component';
export * from './about/about.component';
export * from './new-post/new-post.component';
export * from './edit-post/edit-post.component';
export * from './eachpost/singlepost.component';
