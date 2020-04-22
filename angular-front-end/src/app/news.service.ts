import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  constructor(private http: HttpClient) { }

  public getNews(type:string, id:number) {
    return this.http.get('https://lintaolu.com/getNews?id=' + id + '&keyword=' + type);
  }
}
