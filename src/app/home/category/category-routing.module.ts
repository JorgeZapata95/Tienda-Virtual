import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { Routes, RouterModule } from '@angular/router';
import { CategoryFormComponent } from './category-form.component';


const categoryRoutes: Routes = [
  {
    path: '',
    component: CategoryComponent
  },
  {
    path: 'categoryform',
    component: CategoryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(categoryRoutes)],
  exports: [RouterModule]
})

export class CategoryRoutingModule { }
