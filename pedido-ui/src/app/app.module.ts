import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { LancheComponent } from './lanche/lanche.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { PedidoComponent } from './pedido/pedido.component';
import { MatButtonModule, MatTableModule, MatToolbar } from '@angular/material';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LancheComponent,
    IngredientesComponent,
    PedidoComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule
    // MatToolbar
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'en-US'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
