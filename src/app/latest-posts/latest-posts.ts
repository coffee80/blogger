import { Component } from '@angular/core';
import { BlogPostPreview } from "../blog-post-preview/blog-post-preview";

@Component({
  selector: 'app-latest-posts',
  imports: [BlogPostPreview],
  templateUrl: './latest-posts.html',
  styleUrl: './latest-posts.css',
})
export class LatestPosts {

    // caricare gli ultimi 30 giorni di post in un signal
    // di nome posts

    // e graficarli nel template
    // 

}
