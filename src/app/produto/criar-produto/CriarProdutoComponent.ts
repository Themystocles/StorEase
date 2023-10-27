import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Item, ItemPost } from 'src/Models/ItemModel';
import { ItensService } from 'src/app/Services/itens.service';




@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss']
})
export class CriarProdutoComponent{
  
  NewItem : ItemPost = {
    nome: "maça",
    quantidade: 3,
    preco: 2.1

  }


  constructor(public dialogRef: MatDialogRef<CriarProdutoComponent>, public itemService: ItensService ) {
  }


 salvarItem(){
  this.itemService.PostItem(this.NewItem).subscribe(res => alert(`Item ${this.NewItem.nome} Criado com sucesso!!!`))
  this.dialogRef.close();
 }

  fecharDialog(): void {
    // Fechar o diálogo sem um resultado (por exemplo, undefined)
    this.dialogRef.close();
  }

}
