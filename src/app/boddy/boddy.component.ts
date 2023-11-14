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

  
  showItensEstoque? : boolean

  
  constructor(public Items : ItensService) {

  }

  ngOnInit(): void {
   this.showItensEstoque = true;
    // Chame o método GetIten() e use o operador map para extrair a quantidade de itens
    this.Items.GetIten().pipe(
      map(res => res.length) // Suponha que res seja um array de itens
    ).subscribe(count => {
      this.qtdItens = count; // Atribua a quantidade de itens à variável qtdItens
    });

    
  }
  

 ngOnDestroi(){
  this.showItensEstoque = false;
 }

 

}


