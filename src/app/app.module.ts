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
import { ProdutoComponent } from './produto/produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EstoqueZeroComponent } from './estoque-zero/estoque-zero.component';
import { EstoqueMinimoComponent } from './estoque-minimo/estoque-minimo.component';
import { HttpClientModule } from '@angular/common/http';

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
    EstoqueMinimoComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    HttpClientModule
    
  ],
  providers: [DrawerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
