import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from '../../models/category';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { CategoryService } from 'src/app/core/services/categories/category.service';
import { error } from 'util';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  columnsToDisplay = ['name', 'actions'];
  categories: Category[];
  dataSource = new MatTableDataSource<Category>(this.categories);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private categoryService: CategoryService,
    public dialog: MatDialog
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getCategories();
  }

  onClick() {
    this.router.navigate(['categoryform'], { relativeTo: this.route });
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe(categories => {
      this.dataSource.data = categories;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  deleteCategory(category: string) {
    this.categoryService.deleteCategory(category).subscribe(cat => console.log(cat));
  }

  openDialogDeleteCategory(data: Category) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      height: '200px',
      data: {name: data.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteCategory(data.name);
      }
    });
  }
}
