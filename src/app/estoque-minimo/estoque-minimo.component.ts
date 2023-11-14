import { Component } from '@angular/core';
import { ItensService } from '../Services/itens.service';
import { Item } from 'src/Models/ItemModel';

@Component({
  selector: 'app-estoque-minimo',
  templateUrl: './estoque-minimo.component.html',
  styleUrls: ['./estoque-minimo.component.scss']
})
export class EstoqueMinimoComponent {

  items : Item[] = []

  constructor(public itemservices: ItensService) {
    
    
  }
  ngOnInit(): void {
    this.itemservices.GetIten().subscribe(res => this.items = res)
  }

}
