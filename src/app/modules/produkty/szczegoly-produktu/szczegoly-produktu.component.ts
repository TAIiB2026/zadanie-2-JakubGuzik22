import { Component, inject, OnInit } from '@angular/core';
import { Produkt } from '../../../models/produkt';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-szczegoly-produktu',
  templateUrl: './szczegoly-produktu.component.html',
  standalone: false
})
export class SzczegolyProduktuComponent implements OnInit {
   private route = inject(ActivatedRoute);
  private produktService = inject(ProductService);

  produkt: Produkt | undefined;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produkt = this.produktService.getProdukt(id);
  }

  private router = inject(Router);


  usunProdukt(): void {
    if (this.produkt) {
      this.produktService.usunProdukt(this.produkt.id);
      this.router.navigate(['/produkty']);
    }
  }

}
