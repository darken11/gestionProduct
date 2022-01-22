import { Category } from '../../../model/category';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
result:any;
  constructor(private httpClient:HttpClient, private categoryService:CategoryService,private router :Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe((data:any)=>{
      this.result=data;
    })
  }



  updateCategory(cat:Category){
  this.router.navigateByUrl('editCategory/'+cat.id);
  }

  deleteCategory(cat:Category){
    let confirmMessage=confirm("Are you sure to delete this record?");
  if(confirmMessage==true){
      this.categoryService.deleteCategory(cat.id).subscribe((data=>{
      this.ngOnInit();
    }))
  }

 }
  onAddCategory(){
    this.router.navigateByUrl('addCategory');
  }

}
