import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { NewProductComponent } from './components/product/new-product/new-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowProductComponent } from './components/product/show-product/show-product.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{path:"home", component:HomeComponent},
{path:"showProduct", component: ShowProductComponent},
{path:"saveProduct", component:NewProductComponent},
{path:"editProduct/:id", component:EditProductComponent},
{path:"category", component:CategoryComponent},
{path:"addCategory", component:AddCategoryComponent},
{path:"editCategory/:id", component:EditCategoryComponent},
{
  path: '',
  redirectTo: "/home",
   pathMatch: "full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
