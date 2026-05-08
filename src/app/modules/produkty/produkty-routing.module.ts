import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SzczegolyProduktuComponent } from './szczegoly-produktu/szczegoly-produktu.component';
import { ListaProduktowComponent } from './lista-produktow/lista-produktow.component';

const routes: Routes = [
  { path: '', component: ListaProduktowComponent },
  { path: ':id', component: SzczegolyProduktuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduktyRoutingModule { }
