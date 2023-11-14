import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/Models/ItemModel';
import { ItensService } from 'src/app/Services/itens.service';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.scss']
})
export class DeletarProdutoComponent implements OnInit{
  id!: string;

  Item! : Item


  constructor(public itemService : ItensService, public route: ActivatedRoute) {
    
    
  }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(){
    this.id = String(this.route.snapshot.paramMap.get('id'))  
    this.itemService.getItemById(this.id).subscribe(res => this.Item = {
      id: 9,
      nome: `${res.nome}`,
      quantidade: 2,
      preco: 28.2,
      dataCadastro : new Date

    })
}

  deleteItem() {
    this.itemService.delete(this.id).subscribe(res => { alert(`Item  ${this.Item.nome} foi Deletado  com sucesso!!!`) })
  }

}
