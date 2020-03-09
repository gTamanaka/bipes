import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [TopbarComponent, LogoComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TopbarComponent
  ]
})
export class LayoutModule { }
