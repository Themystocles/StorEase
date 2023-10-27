import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItensEstoqueComponent } from './itens-estoque/itens-estoque.component';
import { BoddyComponent } from './boddy/boddy.component';
import { SobreComponent } from './sobre/sobre.component';
import { DrawerComponent } from './drawer/drawer.component';
import { ContatoComponent } from './contato/contato.component';
import { ProdutoComponent } from './produto/ListarProdut/produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EstoqueZeroComponent } from './estoque-zero/estoque-zero.component';
import { EstoqueMinimoComponent } from './estoque-minimo/estoque-minimo.component';
import { CriarProdutoComponent } from './produto/criar-produto/CriarProdutoComponent';

const routes: Routes = [

  {path: '',
  component: DrawerComponent,
  children: [
        { path: 'ItensEstoque', component: ItensEstoqueComponent },
        { path: 'EstoqueZero', component: EstoqueZeroComponent },
        { path: 'EstoqueMinimo', component: EstoqueMinimoComponent }
  ]
},

{ path: 'Produto', component: ProdutoComponent },
{ path: 'Sobre', component: SobreComponent },
{ path: 'Contato', component: ContatoComponent},
{ path: 'Cadastro', component: CadastroComponent },
{ path: 'CriarProduto', component: CriarProdutoComponent },



  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
