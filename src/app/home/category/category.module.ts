import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFormComponent } from './category-form.component';
import { CategoryComponent } from './category.component';
import { AnimationsModule } from 'src/app/shared/animations/animations.module';
import { CategoryRoutingModule } from './category-routing.module';




@NgModule({
  declarations: [CategoryFormComponent, CategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    AnimationsModule
  ]
})
export class CategoryModule { }
