import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduktyRoutingModule } from './produkty-routing.module';
import { ListaProduktowComponent  } from './lista-produktow/lista-produktow.component';
import { SzczegolyProduktuComponent } from './szczegoly-produktu/szczegoly-produktu.component';


@NgModule({
  declarations: [
    ListaProduktowComponent ,
    SzczegolyProduktuComponent
  ],
  imports: [
    CommonModule,
    ProduktyRoutingModule
  ]
})
export class ProduktyModule { }
