import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from '../../models/category';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  columnsToDisplay = ['name'];
  categories: Category[];
  dataSource = new MatTableDataSource<Category>(this.categories);


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getCategories();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onClick() {
    this.router.navigate(['categoryform'], { relativeTo: this.route });
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe(categories => {
      this.dataSource.data = categories;
    });
  }
}
