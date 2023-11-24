import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { DrawerComponent } from './drawer/drawer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BoddyComponent } from './boddy/boddy.component';
import { ItensEstoqueComponent } from './itens-estoque/itens-estoque.component';
import { SobreComponent } from './sobre/sobre.component';
import { DrawerService } from './drawer.service';
import { ContatoComponent } from './contato/contato.component';
import { ProdutoComponent } from './produto/ListarProdut/produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EstoqueZeroComponent } from './estoque-zero/estoque-zero.component';
import { EstoqueMinimoComponent } from './estoque-minimo/estoque-minimo.component';
import { HttpClientModule } from '@angular/common/http';
import { CriarProdutoComponent } from './produto/criar-produto/CriarProdutoComponent';
import { AtualizarProdutoComponent } from './produto/atualizar-produto/atualizar-produto.component';
import { DeletarProdutoComponent } from './produto/deletar-produto/deletar-produto.component';
import {  MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HistoricoComponent } from './historico/historico.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { VendidoComponent } from './vendido/vendido.component';
import { HistoricoCompraeVendaComponent } from './historico-comprae-venda/historico-comprae-venda.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrawerComponent,
    BoddyComponent,
    ItensEstoqueComponent,
    SobreComponent,
    ContatoComponent,
    ProdutoComponent,
    CadastroComponent,
    EstoqueZeroComponent,
    EstoqueMinimoComponent,
    CriarProdutoComponent,
    AtualizarProdutoComponent,
    DeletarProdutoComponent,
    HistoricoComponent,
    AdicionarComponent,
    VendidoComponent,
    HistoricoCompraeVendaComponent,
    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule
    
  ],
  providers: [DrawerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
