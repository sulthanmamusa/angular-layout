import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { FullwidthComponent } from './fullwidth/fullwidth.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DefaultComponent, FullwidthComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class LayoutsModule { }
