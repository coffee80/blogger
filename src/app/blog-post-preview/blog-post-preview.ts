import { Component, input, computed, inject } from '@angular/core';
import { BlogPost } from '../model/entities';
import { BlogPostService } from '../blog-post-service';

/**
 * 
 * Un BlogPostPreview è l'anteprima di un post 
 * con il titolo, il nome dell'autore, la data
 * e le prime 3-4 righe...
 * 
 * ha un pulsante per andare a vedere il post per intero
 */
@Component({
  selector: 'app-blog-post-preview',
  imports: [],
  templateUrl: './blog-post-preview.html',
  styleUrl: './blog-post-preview.css',
})
export class BlogPostPreview {

    // un BlogPostPreview deve ricevere i dati di un BlogPost dal PADRE sotto forma di signal 
    // signal di input 
    blogPost = input.required<BlogPost>();
    preview = computed<string>(() => this.blogPost().content.split('\n').slice(0, 3).join('\n'));

    blogPostService = inject(BlogPostService);

    hidePost():void{
        this.blogPostService.hidePost(this.blogPost().id).subscribe
        (
            {
                // se il server mi da l'ok io sul client lo indico come nascosto
                next: () => this.blogPost().published = false, 
                error: err => console.log(err)
            }
        );
    }

    publishPost():void{
        this.blogPostService.publishPost(this.blogPost().id).subscribe(
            {
                // se il server mi da l'ok, io sul client lo indico come mostrato
                next: () => this.blogPost().published = true,
                error: err => console.log(err)
            }
        )
    }

}
