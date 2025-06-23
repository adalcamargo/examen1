import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
     currentSlide = 0;
  slideWidth = 320; // Ancho aproximado de cada slide
  products = [
    {
      title: 'Galaxy S25 Ultra',
      sponsor: 'Coca-Cola',
      installments: 2,
      storeUrl: 'WWW.CELULANDIA.COM.MX'
    },
    {
      title: 'iPhone 15 Pro',
      sponsor: 'Pepsi',
      installments: 3,
      storeUrl: 'WWW.TIENDAMOVIL.COM'
    },
    {
      title: 'Pixel 8 Pro',
      sponsor: '',
      installments: 4,
      storeUrl: 'WWW.TECHSTORE.MX'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getTransform(): string {
    return `translateX(-${this.currentSlide * this.slideWidth}px)`;
  }

  nextSlide(): void {
    const totalSlides = this.products.length + 5; // Productos + 5 imágenes
    this.currentSlide = (this.currentSlide + 1) % totalSlides;
  }

  prevSlide(): void {
    const totalSlides = this.products.length + 5; // Productos + 5 imágenes
    this.currentSlide = (this.currentSlide - 1 + totalSlides) % totalSlides;
  }
}
