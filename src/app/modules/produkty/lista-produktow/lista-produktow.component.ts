import { Component, OnInit, inject } from '@angular/core';
import { Produkt } from '../../../models/produkt';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-lista-produktow',
  templateUrl: './lista-produktow.component.html',
  standalone: false
})
export class ListaProduktowComponent implements OnInit {
  private produktService = inject(ProductService);
  
  produkty: Produkt[] = [];
  aktualnaStrona: number = 1;

  ngOnInit(): void {
    this.produkty = this.produktService.getProdukty(this.aktualnaStrona);
    //console.log('produkty:', this.produkty);
  }

  zmienStrone(strona: number): void {
    this.aktualnaStrona = strona;
    this.produkty = this.produktService.getProdukty(this.aktualnaStrona);
  }
}