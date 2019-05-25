import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent} from './home.component';
import { CategoryComponent} from './category/category.component'
import { Routes, RouterModule } from '@angular/router';


const homeRoutes: Routes = [
  { path: '',
  component: HomeComponent
  },
  {path: '/category',
  component: CategoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
