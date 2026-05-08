import { Injectable } from '@angular/core';
import { Produkt } from '../models/produkt';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private produkty: Produkt[] = [
    { id: 1, nazwa: 'Laptop', opis: 'Laptop gamingowy', cena: 4999.99, dataWpisu: new Date('2024-01-15') },
    { id: 2, nazwa: 'Mysz', opis: 'Mysz bezprzewodowa', cena: 149.99, dataWpisu: new Date('2024-02-20') },
    { id: 3, nazwa: 'Klawiatura', opis: 'Klawiatura mechaniczna', cena: 299.99, dataWpisu: new Date('2024-03-10') },
    { id: 4, nazwa: 'Monitor', opis: 'Monitor 4K 27 cali', cena: 1899.99, dataWpisu: new Date('2024-04-05') },
    { id: 5, nazwa: 'Słuchawki', opis: 'Słuchawki nauszne', cena: 399.99, dataWpisu: new Date('2024-05-12') },
    { id: 6, nazwa: 'Webcam', opis: 'Kamera internetowa HD', cena: 249.99, dataWpisu: new Date('2024-06-01') },
    { id: 7, nazwa: 'Mikrofon', opis: 'Mikrofon pojemnościowy', cena: 349.99, dataWpisu: new Date('2024-07-19') },
    { id: 8, nazwa: 'Podkładka', opis: 'Podkładka XXL pod mysz', cena: 79.99, dataWpisu: new Date('2024-08-22') },
    { id: 9, nazwa: 'Hub USB', opis: 'Rozdzielacz USB-C 7w1', cena: 189.99, dataWpisu: new Date('2024-09-30') },
    { id: 10, nazwa: 'Głośniki', opis: 'Głośniki stereo 2.1', cena: 599.99, dataWpisu: new Date('2024-10-11') },
  ];

  getProdukty(strona: number = 1): Produkt[] {
    const naStronie = 5;
    const start = (strona - 1) * naStronie;
    const wynik = this.produkty.slice(start, start + naStronie);
    return wynik;
  }

  getProdukt(id: number): Produkt | undefined {
    return this.produkty.find(p => p.id === id);
  }

  usunProdukt(id: number): void {
    this.produkty = this.produkty.filter(p => p.id !== id);
  }
}
