import { Component, OnInit } from '@angular/core';
import { ItensService } from '../Services/itens.service';
import { Item } from 'src/Models/ItemModel';


@Component({
  selector: 'app-itens-estoque',
  templateUrl: './itens-estoque.component.html',
  styleUrls: ['./itens-estoque.component.scss']
})
export class ItensEstoqueComponent implements OnInit{

  item? : Item[] = []

  constructor(public Itemservice : ItensService) {
    
  }

  ngOnInit(): void {
    this.Itemservice.GetIten().subscribe(res => this.item = res)
  }

  
  
 
  }



