import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  productFormGroup?:FormGroup;
  submitted:boolean=false;
  constructor(private router:Router,private fb: FormBuilder, private categoryService :CategoryService) { }

  ngOnInit(): void {
    this.productFormGroup=this.fb.group({
      name: ['', Validators.required]


    })
  }
  onAddCategory(){

    this.categoryService.createCategory(this.productFormGroup?.value).subscribe(data=>{
      alert("new Category add with success!!");
      this.ngOnInit();
    },(err:any)=>{
      alert("this Category already existe");
    })
  }
  onBackToHome(){
    this.router.navigateByUrl('/');
  }

}
