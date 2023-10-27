import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, ItemPost } from 'src/Models/ItemModel';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  url = "http://localhost:5284/api/Itens"

  constructor(private http: HttpClient ) { }

  GetIten(): Observable<Item[]>{
    return this.http.get<Item[]>(this.url);
  }

  PostItem(Item : ItemPost):Observable<ItemPost>{
    return this.http.post<ItemPost>(this.url, Item);
  }
}
