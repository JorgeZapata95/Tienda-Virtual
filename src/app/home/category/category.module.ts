import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFormComponent } from './category-form.component';
import { CategoryComponent } from './category.component';
import { AnimationsModule } from 'src/app/shared/animations/animations.module';
import { CategoryRoutingModule } from './category-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@NgModule({
  declarations: [CategoryFormComponent, CategoryComponent, ModalComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    AnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [ModalComponent]
})
export class CategoryModule { }
