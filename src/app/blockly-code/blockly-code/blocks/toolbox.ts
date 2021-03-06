import LogicBlocks from './logic.blocks';
import LoopBlocks from './loop.blocks';
import MathBlocks from './math.blocks';
import TextBlocks from './text.blocks';
import ListBlocks from './list.blocks';
import ColorBlocks from './color.blocks';
import { Injectable } from '@angular/core';
// import CustomBlocks from '../../custom-blocks/custom.blocks'
// import CustomBlocks from '../../custom-blocks/custom.blocks'
@Injectable({
  providedIn: 'root'
})
export class CustomToolBox {
    constructor(){

    }
    getToolbox() {
        return `
        <xml id="toolbox" style="display: none">
        ${LogicBlocks}
        ${LoopBlocks}
        ${MathBlocks}
        ${TextBlocks}
        ${ListBlocks}
        ${ColorBlocks}
        <sep></sep>
        <category name="Variables" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>
        <category name="Functions" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>
        <sep><sep>
      </xml>
    `
    }
}