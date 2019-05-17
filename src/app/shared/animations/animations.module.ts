import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule

  ]
})
export class AnimationsModule { }
