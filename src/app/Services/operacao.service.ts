import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { historicoDoisModel, historicoDoisModelPost } from 'src/Models/HistoricoDois.model';

@Injectable({
  providedIn: 'root'
})
export class OperacaoService {
  url = "http://localhost:5284/api/Itens/historicoDois"

  constructor(private http: HttpClient) { }
  

  GetHistorico(): Observable<historicoDoisModel[]>{
    return this.http.get<historicoDoisModel[]>(this.url);
    
  }

  PostHistoricoDois(historicoDois : historicoDoisModelPost):Observable<historicoDoisModelPost>{
    return this.http.post<historicoDoisModelPost>(this.url, historicoDois);
  }
}
