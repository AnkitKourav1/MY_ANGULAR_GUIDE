// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.service';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'admin', canActivate: [AuthGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**', component: NotFoundComponent },
];
