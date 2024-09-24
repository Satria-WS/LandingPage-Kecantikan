import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TentangKamiComponent } from './components/tentang-kami/tentang-kami.component';
import { ProdukComponent } from './components/produk/produk.component';
import { PeluangBisnisComponent } from './components/peluang-bisnis/peluang-bisnis.component';
import { BerandaComponent } from './components/beranda/beranda.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'beranda',
        pathMatch: 'full',
      },
      {
        path: 'beranda',
        component: BerandaComponent,
      },
      {
        path: 'tentang-kami',
        component: TentangKamiComponent,
      },
      {
        path: 'produk',
        component: ProdukComponent,
      },
      {
        path: 'peluang-bisnis',
        component: PeluangBisnisComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
