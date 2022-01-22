import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../../../model/product';
import { Router } from '@angular/router';
import { ActionProduct, AppDataState, DataStateEnum, ProductActionsType } from '../../../states/product.state';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
result:any;
  constructor(private http:HttpClient, private service:ProductService, private router: Router) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((data:any)=>
    {
      this.result=data;
    })
  }
  updateProduct(product: Product){
    this.router.navigateByUrl('/editProduct/'+product.id);

  }
  deleteProduct(product: Product){
    let answer=confirm('Etes vous sure?')
    if( answer==true){
       this.service.deleteProduct(product).subscribe(data=>{
      this.ngOnInit();
      });
    }

  }
  onAddProduct(){
    this.router.navigateByUrl('/saveProduct')
  }
  // onSearch(dataForm:any){
  //   this.productEventEmitter.emit({type:ProductActionsType.SEARCH,payload:dataForm})
  // }


}
