import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AnimationsModule } from '../shared/animations/animations.module';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [HomeComponent, CategoryComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AnimationsModule
  ]
})
export class HomeModule { }
