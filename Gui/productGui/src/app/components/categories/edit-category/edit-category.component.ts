import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  categoryId:number;
  categoryFormGroup?:FormGroup;
  submitted:boolean=false;
  constructor(private activateRoute:ActivatedRoute,
              private categorieService:CategoryService,
              private router:Router,
              private fb:FormBuilder) {
      this.categoryId=activateRoute.snapshot.params['id'];
     }

  ngOnInit(): void {
    this.categorieService.getCategory(this.categoryId).subscribe(category=>{
      this.categoryFormGroup = this.fb.group({
         id:[category.id, Validators.required],
         name:[category.name, Validators.required]
         }
        )
      });
  }


  onEditCategory(){
    this.categorieService.updateCategory(this.categoryFormGroup?.value).subscribe(data=>{
      alert("success, Category Updated!!");
    })
  }
  onBackToHome(){
    this.router.navigateByUrl('/category');
  }

}
