import { Component, input } from '@angular/core';
import { BlogPost } from '../model/entities';

@Component({
  selector: 'app-blog-post-preview',
  imports: [],
  templateUrl: './blog-post-preview.html',
  styleUrl: './blog-post-preview.css',
})
export class BlogPostPreview {

    // latest post deve passarmi una variabile di tipo post
    post = input.required<BlogPost>();

    // nell'html devo graficare questo coso
    // titolo, nome autore, data, prme righe del contenuto

    public hide():void{
        // deve usare il metodo di un servizio (BlogPostService)
        // per nascondere il post 
    }

    public publish():void{
        // come sopra ma per pubblicare
    }
}
