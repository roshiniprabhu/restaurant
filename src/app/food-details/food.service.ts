import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }
  
  public getFoods(): Observable<Food[]>{
    return this.httpClient.get<Food[]>(this.url);
}
}