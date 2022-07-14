import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'}, // First component to load when open the application
  {path: 'list', component: ListComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
