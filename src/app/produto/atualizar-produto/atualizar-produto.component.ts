import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemPost } from 'src/Models/ItemModel';
import { ItensService } from 'src/app/Services/itens.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.scss']
})
export class AtualizarProdutoComponent  implements OnInit {
  id!: string;

  Item! : ItemPost;
  



  constructor(public UpdateServices: ItensService, public route: ActivatedRoute) {
    
    
  }
  ngOnInit(): void {
    this.getItem();
  }

  getItem(){
    this.id = String(this.route.snapshot.paramMap.get('id'))  
    this.UpdateServices.getItemById(this.id).subscribe(res => this.Item = {
      
      nome: `${res.nome}`,
      quantidade: 2,
      preco: 28.2,
     

    })
}
updateitem(){
  this.UpdateServices.PutItem(this.id, this.Item).subscribe(res => this.Item =
     { nome: this.Item.nome, preco: this.Item.preco, quantidade: this.Item.quantidade, }  )
     alert("Item alterado com sucesso!!!")
}

}
