import { Component, input } from '@angular/core';
import { Blogger } from '../model/entities';

@Component({
  selector: 'app-blogger-preview',
  imports: [],
  templateUrl: './blogger-preview.html',
  styleUrl: './blogger-preview.css',
})
export class BloggerPreview {



    blogger = input.required<Blogger>();

    // deve graficare un blogger
    // deve avere un pulsantino banna / sbanna
    // collegato a un metodo per bannare e sbannare il blogger
    // dovrà chiamare un metodo di BloggerService
    // che ancora non esiste
    // e una api che ancora non esiste...
    // ma qui sono fattacci vostri perché è uguale al discorso dei 
    // blogPost
    

}
