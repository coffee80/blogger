import { Component, inject, signal } from '@angular/core';
import { BlogPostService } from '../blog-post-service';
import { BlogPost } from '../model/entities';
import { FormsModule } from '@angular/forms';
import { BlogPostPreview } from "../blog-post-preview/blog-post-preview";

@Component({
  selector: 'app-blog-post-list',
  imports: [FormsModule, BlogPostPreview],
  templateUrl: './blog-post-list.html',
  styleUrl: './blog-post-list.css',
})
export class BlogPostList {

    blogPostService = inject(BlogPostService);

    posts = signal<BlogPost[]>([]);

    d1:Date = new Date();
    d2:Date = new Date();

    doSearch():void{
        this
            .blogPostService
            .getPostsBetween(this.d1, this.d2)
            .subscribe
            (
                {
                    next: posts => this.posts.set(posts),
                    error: err => console.log(err)
                }
            );
    }   



}
