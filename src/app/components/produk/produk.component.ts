import { Component } from '@angular/core';

@Component({
  selector: 'app-produk',
  standalone: true,
  imports: [],
  templateUrl: './produk.component.html',
  styleUrl: './produk.component.css',
})
export class ProdukComponent {
  image = [
    {
      name: 'image-1',
      src: '/assets/produk/image-1.png',
    },
    {
      name: 'image-2',
      src: '/assets/produk/image-2.png',
    },
    {
      name: 'image-3',
      src: '/assets/produk/image-3.png',
    },
    {
      name: 'image-4',
      src: '/assets/produk/image-4.png',
    },
    {
      name: 'image-5',
      src: '/assets/produk/image-5.png',
    },
    {
      name: 'image-6',
      src: '/assets/produk/image-6.png',
    },
  ];
}
