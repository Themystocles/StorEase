import { Component, OnInit } from '@angular/core';
import { Item } from 'src/Models/ItemModel';
import { ItensService } from '../../Services/itens.service';
import { MatDialog } from '@angular/material/dialog';
import { CriarProdutoComponent } from '../criar-produto/CriarProdutoComponent';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  item? : Item[] = []
  constructor(public Itemservice : ItensService,public dialog: MatDialog ) {
    
  }
  ngOnInit(): void {
    this.Itemservice.GetIten().subscribe(res => this.item = res)
  }
  openCadastroProdutoDialog() {
    const dialogRef = this.dialog.open(CriarProdutoComponent, {
      width: '400px', // Defina o tamanho do diálogo conforme necessário
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // O código a ser executado após o formulário de cadastro ser submetido com sucesso.
        // Você pode atualizar a lista de produtos ou realizar outras ações aqui.
      }
    });
   

  }

  

}
