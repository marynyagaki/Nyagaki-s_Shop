import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { FruitsComponent } from './fruits/fruits.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  {
    path:"shop",
    component:ShopComponent
  },
  {
    path:"fruits",
    component:FruitsComponent
  },
  {
    path:"contacts",
    component:ContactsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
