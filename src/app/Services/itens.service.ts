import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/Models/ItemModel';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  url = "http://localhost:5284/api/Itens"

  constructor(private http: HttpClient ) { }

  GetIten(): Observable<Item[]>{
    return this.http.get<Item[]>(this.url);
  }
}
