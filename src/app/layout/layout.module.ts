import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';



@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TopbarComponent
  ]
})
export class LayoutModule { }
