import { Component, OnInit } from '@angular/core';
import { historicoServices } from '../Services/historico.service';
import { historico } from 'src/Models/HistoricoModel';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {
  historico: historico[] = [];
  historicoFiltrado: historico[] = [];
  termoPesquisa: string = '';
  operacaoFiltro: string = '';

  constructor(public historicos: historicoServices) {}

  ngOnInit(): void {
    this.historicos.GetIten().subscribe(res => {
      this.historico = res;
      this.aplicarFiltro(); // Aplica o filtro inicial ao carregar os dados
    });
  }

  aplicarFiltro(): void {
    // Se não houver um termo de pesquisa nem uma operação selecionada, exibe todos os itens
    if ((!this.termoPesquisa || this.termoPesquisa === '') && (!this.operacaoFiltro || this.operacaoFiltro === '')) {
      this.historicoFiltrado = this.historico;
      return;
    }

    // Filtra os itens com base no termo de pesquisa e na operação
    this.historicoFiltrado = this.historico.filter(item =>
      (item.item.toLowerCase().includes(this.termoPesquisa.toLowerCase()) || !this.termoPesquisa) &&
      (item.operacao.includes(this.operacaoFiltro) || !this.operacaoFiltro)
    );
  }
}
