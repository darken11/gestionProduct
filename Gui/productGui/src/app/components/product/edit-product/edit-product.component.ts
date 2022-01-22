import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId:number;
  productFormGroup?:FormGroup;
  submitted:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
    private productService:ProductService,
    private router: Router,
    private fb:FormBuilder)
    {this.productId=activatedRoute.snapshot.params['id']  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId).subscribe(product=>{
      this.productFormGroup=  this.fb.group({
        id: [product.id, Validators.required],
        designation: [product.designation, Validators.required],
        price: [product.price, Validators.required],
        quantity: [product.quantity, Validators.required],
        category: [product.category.name, Validators.required]

      })
    });
  }

  onEditProduct() {
    this.productService.updateProduct(this.productFormGroup?.value).subscribe(
      data=>{alert("success product Updated!!");

      }
    )

  }
  onBackToHome() {
    this.router.navigateByUrl('/');
  }

}
