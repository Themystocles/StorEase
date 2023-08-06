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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrawerComponent,
    BoddyComponent,
    ItensEstoqueComponent,
    SobreComponent,
    ContatoComponent,
    ProdutoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule
    
  ],
  providers: [DrawerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
