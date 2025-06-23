import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';
@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Productos {
  productos: Product[];

  constructor(private productsService: Products) {
    this.productos = this.productsService.getProducts();
  }

  toggleEspecificaciones(producto: Product): void {
    producto.expandido = !producto.expandido;
  }

  toggleFavorito(producto: Product): void {
  producto.favorito = !producto.favorito;}

}
