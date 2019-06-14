import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/core/services/categories/category.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  category: Category;
  categoryForm;
  constructor(private categoryService: CategoryService,
              private formBuilder: FormBuilder
  ) {

 this.categoryForm = this.formBuilder.group({name: ''});

  }

  ngOnInit() {
  }

  onSubmit(customerData: Category) {
   this.categoryService.addCategory(customerData).subscribe(category => console.log(category)
   );
   this.categoryForm.reset();
  }

}
