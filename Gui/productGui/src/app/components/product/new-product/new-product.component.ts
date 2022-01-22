import { Observable } from 'rxjs';
import { Category } from '../../../model/category';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productFormGroup?:FormGroup;
  submitted:boolean=false;
  product: any;
  categories:any ;
  constructor(private router:Router,private fb: FormBuilder,
    private productService:ProductService,
    private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe((data:any)=>{
      this.categories=data;
    });
    this.productFormGroup=this.fb.group({
      designation: ['', Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      category:[this.categories,Validators.required]

    })
  }

  onAddProduct(){
this.submitted=true;
if(this.productFormGroup?.invalid)return;
this.productService.saveProduct(this.productFormGroup?.value).subscribe(data=>{
   alert('succes saving Product');
  this.product=data;
})
  }
  onBackToHome(){
    this.router.navigateByUrl('/');
  }
}
