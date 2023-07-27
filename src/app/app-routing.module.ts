import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItensEstoqueComponent } from './itens-estoque/itens-estoque.component';
import { BoddyComponent } from './boddy/boddy.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [

  {path: 'Sobre', component: SobreComponent},
  {path: 'ItensEstoque', component: ItensEstoqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
