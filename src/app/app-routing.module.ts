import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItensEstoqueComponent } from './itens-estoque/itens-estoque.component';
import { BoddyComponent } from './boddy/boddy.component';
import { SobreComponent } from './sobre/sobre.component';
import { DrawerComponent } from './drawer/drawer.component';
import { ContatoComponent } from './contato/contato.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [

  {path: '',
  component: DrawerComponent,
  children: [
        { path: 'ItensEstoque', component: ItensEstoqueComponent },
  ]
},

{ path: 'Produto', component: ProdutoComponent },
{ path: 'Sobre', component: SobreComponent },
{ path: 'Contato', component: ContatoComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
