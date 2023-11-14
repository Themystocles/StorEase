import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { historico } from 'src/Models/HistoricoModel';
import { Item, ItemPost } from 'src/Models/ItemModel';

@Injectable({
  providedIn: 'root'
})
export class historicoServices {

  url = "http://localhost:5284/api/historico"

  constructor(private http: HttpClient ) { }

  GetIten(): Observable<historico[]>{
    return this.http.get<historico[]>(this.url);
  }


}
