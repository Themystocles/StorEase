import { Component, OnInit } from '@angular/core';
import { ItensService } from '../Services/itens.service';
import { map } from 'rxjs/operators'; // Importe o operador map
import { Item } from 'src/Models/ItemModel';

@Component({
  selector: 'app-boddy',
  templateUrl: './boddy.component.html',
  styleUrls: ['./boddy.component.scss']
})
export class BoddyComponent implements OnInit {

  qtdItens?: number
  qtdzero?: number
  qtdmenorcem?: number

  showItensEstoque? : boolean

  
  constructor(public Items : ItensService) {

  }

  ngOnInit(): void {
  this.qtdItensestoque();
  this.qtdItenszero();
  this.qtdItensmenorcem();
    
  }

  qtdItensestoque(){
    this.showItensEstoque = true;
    // Chame o método GetIten() e use o operador map para extrair a quantidade de itens
    this.Items.GetIten().pipe(
      map(res => res.length) // Suponha que res seja um array de itens
    ).subscribe(count => {
      this.qtdItens = count; // Atribua a quantidade de itens à variável qtdItens
    });
  }
  qtdItenszero() {
    this.showItensEstoque = true;
    // Use o método filter para contar apenas os itens com quantidade zero
    this.Items.GetIten().pipe(
      map(res => res.filter(item => item.quantidade === 0).length)
    ).subscribe(count => {
      this.qtdzero = count;
    });
  }

  qtdItensmenorcem() {
    this.showItensEstoque = true;
    // Use o método filter para contar apenas os itens com quantidade zero
    this.Items.GetIten().pipe(
      map(res => res.filter(item => item.quantidade > 0 && item.quantidade <= 100).length)
    ).subscribe(count => {
      this.qtdmenorcem = count;
    });
  }
  

 ngOnDestroi(){
  this.showItensEstoque = false;
 }

 

}


