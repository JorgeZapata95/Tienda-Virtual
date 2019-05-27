import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
    ) {}

  ngOnInit() {
    this.getCategories();
  }

  onClick() {
    this.router.navigate(['categoryform'], { relativeTo: this.route });
    console.log('Jorge!');

  }

  getCategories(): void {
   this.categoriesService.getCategories().subscribe(categories => this.categories = categories);
  }
}
