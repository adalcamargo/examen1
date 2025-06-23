import { Injectable } from '@angular/core';

export interface Product{
favorito: any;
  id: number;
  nombre:string;
  descripcion: string;
  precio: number;
  imagen: string;
  especificaciones?: {
    pantalla?: string;
    almacenamiento?: string;
    ram?: string;
    camara?: string;
    bateria?: string;
    procesador?: string;
    favorito?: boolean; // Nueva propiedad

  };
  expandido?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class Products {
  
  private products:Product[] = [
    {
      id: 1,
      nombre: 'Apple iPhone 15 128GB Dual SIM Física Negro',
      descripcion: 'El iPhone 15 es un smartphone diseñado para quienes buscan lo mejor en rendimiento, fotografía y durabilidad.',
      precio: 15999,
      imagen: '/img/phone13.png',
      favorito: false,
      especificaciones: {
        pantalla: '6.1" Super Retina XDR',
        almacenamiento: '128GB/256GB/512GB',
        ram: '4GB',
        camara: 'Dual 12MP (wide y ultra wide)',
        bateria: '3240 mAh',
        procesador: 'Apple A16 Bionic (4nm, 6 núcleos)',

      },
      expandido: false
    },
    {
      id: 2,
      nombre: 'Samsung Galaxy A56 5G 256GB 12GB Dual Sim Negro',
      descripcion: 'El Samsung Galaxy A56 5G es un smartphone de gama media que ofrece un equilibrio perfecto entre rendimiento, diseño y funcionalidad, ideal para quienes buscan un dispositivo confiable sin complicaciones técnicas.',
      precio: 7999,
      imagen: '/img/a56.png',
      favorito: false,
      especificaciones: {
        pantalla: '6.5" Super AMOLED 120Hz',
        almacenamiento: '256GB (expandible hasta 1TB)',
        ram: '12GB',
        camara: 'Triple: 50MP (main) + 12MP (ultrawide) + 5MP (macro)',
        bateria: '5000 mAh con carga rápida 25W',
        procesador: 'Exynos 1380'
    },
    expandido: false
    },
    {
      id: 3,
      nombre: 'Redmi Note 14 4G 6GB 128GB Negro',
      descripcion: 'Equipado con un procesador de última generación y 6GB de RAM, este dispositivo maneja juegos exigentes, apps pesadas y multitarea fluida como un profesional. Los 128GB de almacenamiento ofrecen espacio para miles de fotos, canciones y apps, mientras la conectividad 5G te mantiene a la vanguardia en velocidad de descarga y streaming.',
      precio: 3399,
      imagen: '/img/red.png',
      favorito: false,
      especificaciones: {
        pantalla: '6.43" AMOLED 90Hz',
        almacenamiento: '128GB (expandible hasta 512GB)',
        ram: '6GB',
        camara: 'Cuádruple: 64MP (main) + 8MP (ultrawide) + 2MP (macro) + 2MP (depth)',
        bateria: '5000 mAh con carga rápida 33W',
        procesador: 'Snapdragon 685'
    },
    expandido: false
    },
   {
      id: 4,
      nombre: 'Xiaomi Poco X6 Pro 5G 256GB 8GB Gris',
      descripcion: 'El Xiaomi Poco X6 Pro 5G 256GB 8GB cuenta con un **procesador Dimensity 8300 Ultra** y una **GPU Mali G615**, que ofrecen un rendimiento excepcional en cada tarea. Con **8GB de RAM**, puedes disfrutar de una experiencia multitarea fluida y sin interrupciones.',
      precio: 5399,
      imagen: '/img/xiomi.png',
      favorito: false,
      especificaciones: {
        pantalla: '6.67" AMOLED 120Hz',
        almacenamiento: '256GB (no expandible)',
        ram: '8GB',
        camara: 'Triple: 64MP (OIS) + 8MP (ultrawide) + 2MP (macro)',
        bateria: '5000 mAh con carga rápida de 67W',
        procesador: 'MediaTek Dimensity 8300 Ultra'
    },
    expandido: false
   },
   {
      id: 5,
      nombre: 'Honor X9c 5G 256GB 8GB Negro Titanio',
      descripcion: 'Con un equilibrio entre potencia, fotografía y autonomía, el Honor X9c 5G es una opción atractiva para quienes buscan un celular con buenas prestaciones y conectividad 5G sin pagar de más.',
      precio: 5799,
      imagen: '/img/honor.png',
      favorito: false,
      especificaciones: {
        pantalla: '6.78" LTPS LCD 90Hz',
        almacenamiento: '256GB (no expandible)',
        ram: '8GB',
        camara: 'Triple: 48MP (main) + 5MP (ultrawide) + 2MP (macro)',
        bateria: '5100 mAh con carga rápida 22.5W',
        procesador: 'Snapdragon 6 Gen 1'
    },
    expandido: false
   }
  ]
  constructor(){}
  getProducts():Product[]{
    return this.products;
  }
}
