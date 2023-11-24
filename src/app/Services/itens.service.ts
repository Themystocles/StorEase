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
  getItemById(id: string): Observable<Item>{
    const urlID = `${this.url}/${id}`
    return this.http.get<Item>(urlID)
  }

  PostItem(Item : ItemPost):Observable<ItemPost>{
    return this.http.post<ItemPost>(this.url, Item);
  }
  

  
  delete(id: string): Observable<Item> {
    const urlID = `${this.url}/${id}`
    return this.http.delete<Item>(urlID)

  }

  PutItem(id: string, Item: ItemPost):Observable<ItemPost>{
    const urlID = `${this.url}/${id}`
    return this.http.put<ItemPost>(urlID, Item);
  }

}