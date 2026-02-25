import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './model/entities';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  
    private http = inject(HttpClient);
    apiurl = "http://localhost:8080/blogger/api/posts";

    hidePost(id:number):Observable<void>{
        return this.http.patch<void>(this.apiurl+"/"+id+"/hide", null);
    }

    publishPost(id:number):Observable<void>{
        return this.http.patch<void>(this.apiurl+"/"+id+"/publish", null);
    }

    getPostsBetween(d1:Date, d2:Date):Observable<BlogPost[]>{
        let url = this.apiurl+"/betweendates/"+d1.toISOString()+"/"+d2.toISOString();
        return this.http.get<BlogPost[]>(url);
    }

}
