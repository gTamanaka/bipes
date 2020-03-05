import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocklyCodeComponent } from './blockly-code/blockly-code.component';



@NgModule({
  declarations: [BlocklyCodeComponent],
  imports: [
    CommonModule
  ],
  exports: [BlocklyCodeComponent],
  // schemas:[NO_ERRORS_SCHEMA]
})
export class BlocklyCodeModule { }
