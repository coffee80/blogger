import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { BlogPostList } from './blog-post-list/blog-post-list';

export const routes: Routes = [
    { path: 'home', component:HomePage},
    { path: 'admin', component:BlogPostList},
];
