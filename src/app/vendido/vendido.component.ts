import { Component, OnInit } from '@angular/core';
import { OperacaoService } from '../Services/operacao.service';
import { historicoDoisModel, historicoDoisModelPost } from 'src/Models/HistoricoDois.model';
import { Item } from 'src/Models/ItemModel';
import { ItensService } from '../Services/itens.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-vendido',
  templateUrl: './vendido.component.html',
  styleUrls: ['./vendido.component.scss']
})
export class VendidoComponent implements OnInit {
 
  itemselect!: Item;
  id!: string;
  NovaQuantidade!: number;

  operacao: historicoDoisModelPost = {
    cliente: "ola",
    cpf: "212121",
    quantidade: 10,
    operacao: "Venda" ,
    item: "Teste"// Inicializando com um valor padrão
  };

  constructor(public itemService: ItensService, public operacaoS: OperacaoService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.itemService.getItemById(this.id).subscribe(res => {
      this.itemselect = res;
    });
  }

  AdicionarQtd() {
    const confirmacao = window.confirm('Confira os dados antes de salvar. Deseja continuar?');

    if (confirmacao) {
      // O usuário clicou em "OK", então podemos prosseguir com a adição
      this.itemselect.quantidade -= this.NovaQuantidade;
      this.operacao.quantidade = this.NovaQuantidade;
      this.operacao.item = this.itemselect.nome

      this.itemService.PutItem(this.id, this.itemselect).subscribe(res => {
        this.itemselect = {
          id: this.itemselect.id,
          nome: this.itemselect.nome,
          preco: this.itemselect.preco,
          quantidade: this.itemselect.quantidade,
          dataCadastro: this.itemselect.dataCadastro
        };

        alert('Item alterado com sucesso!!!');

        this.operacaoS.PostHistoricoDois(this.operacao).subscribe(res => alert(
          `Venda  ${this.operacao.cliente} ${this.operacao.cpf}  ${this.operacao.quantidade}  
          Criado com sucesso!!!`
        ));
      });
    } else {
      // O usuário clicou em "Cancelar", não fazemos nada
    }
  }
}