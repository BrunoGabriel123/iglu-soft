import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LancheComponent } from './lanche/lanche.component';
import { PedidoComponent } from './pedido/pedido.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'lanche', component: LancheComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
