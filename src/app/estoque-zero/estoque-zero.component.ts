import { Component, OnInit } from '@angular/core';
import { ItensService } from '../Services/itens.service';
import { Item } from 'src/Models/ItemModel';

@Component({
  selector: 'app-estoque-zero',
  templateUrl: './estoque-zero.component.html',
  styleUrls: ['./estoque-zero.component.scss']
})
export class EstoqueZeroComponent implements OnInit {
  items : Item[] = []
 
  constructor(public itemservices: ItensService) {
    
    
  }
  ngOnInit(): void {
    this.itemservices.GetIten().subscribe(res => this.items = res)
  }
}
