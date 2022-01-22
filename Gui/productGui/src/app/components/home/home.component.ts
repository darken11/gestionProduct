import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { ActionProduct, AppDataState, DataStateEnum } from 'src/app/states/product.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() productEventEmitter: EventEmitter<ActionProduct>= new EventEmitter<ActionProduct>()
  products$: Observable<AppDataState<Product[]>> | null = null;
  readonly DataStateEnum = DataStateEnum;
  product:any;
  constructor(private service:ProductService) { }

  ngOnInit(): void {
  }
  onSearchProduct(dataForm: any) {
     this.service.searchProductByKeyword(dataForm.keyword).subscribe(data=>{
      this.product=data;
    },err=>{
      console.log(err);
    });

  }
}
