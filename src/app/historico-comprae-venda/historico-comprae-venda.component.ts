import { Component, OnInit } from '@angular/core';
import { OperacaoService } from '../Services/operacao.service';
import { historicoDoisModel } from 'src/Models/HistoricoDois.model';

@Component({
  selector: 'app-historico-comprae-venda',
  templateUrl: './historico-comprae-venda.component.html',
  styleUrls: ['./historico-comprae-venda.component.scss']
})
export class HistoricoCompraeVendaComponent implements OnInit {

  historico?: historicoDoisModel[];
  historicoFiltrado: historicoDoisModel[] = [];
  filtroFornecedor: string = '';
  filtroItem: string = '';
  filtroCompraVenda: string = '';

  constructor(public services: OperacaoService) {}

  ngOnInit(): void {
    this.services.GetHistorico().subscribe(res => {
      this.historico = res;
      this.aplicarFiltro();
    });
  }

  aplicarFiltro(): void {
    if (!this.historico) {
      return;
    }

    this.historicoFiltrado = this.historico.filter(hist =>
      this.filtroPassa(hist.cliente, this.filtroFornecedor) &&
      this.filtroPassa(hist.item, this.filtroItem) &&
      this.filtroPassa(hist.operacao.toLowerCase(), this.filtroCompraVenda.toLowerCase())
    );
  }

  filtroPassa(valor: string, filtro: string): boolean {
    return !filtro || valor.toLowerCase().includes(filtro.toLowerCase());
  }
}
