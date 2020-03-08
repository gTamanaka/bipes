import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocklyCodeComponent } from './blockly-code/blockly-code.component';
import { WebreplComponent } from './webrepl/webrepl.component';



@NgModule({
  declarations: [BlocklyCodeComponent, WebreplComponent],
  imports: [
    CommonModule
  ],
  exports: [BlocklyCodeComponent],
})
export class BlocklyCodeModule { }
