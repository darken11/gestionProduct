import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewProductComponent } from './components/product/new-product/new-product.component';
import { ShowProductComponent } from './components/product/show-product/show-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NewProductComponent,
    ShowProductComponent,
    EditProductComponent,
    NavBarComponent,
    CategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     FormsModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
