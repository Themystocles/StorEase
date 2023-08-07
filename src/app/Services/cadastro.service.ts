import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cadastradoUsuario } from './Models/CadastroUsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  url = ""

  constructor(private http: HttpClient) { }
  // Pegar Os dados Usuário cadastrado para o Placeholder

  getCadastroUsuario(): Observable<cadastradoUsuario> {
    return this.http.get<cadastradoUsuario>(this.url)
  }


}
