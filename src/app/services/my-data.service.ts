import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MyDataService {

  constructor(private http: HttpClient) {
    console.log('service is called!');
  //   this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
  //   console.log('api data', data);
  //  });
   }

  concatenate(fName: string, lName: string): string {
    return `${fName} ${lName}`
  }

  myPostsData(): void{
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
    console.log('api data', data)
   });
  }
}

export interface Post{
  userId: number,
  id: number,
  title: string,
  body: string
}
