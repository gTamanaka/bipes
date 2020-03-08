import LogicBlocks from './logic.blocks';
import LoopBlocks from './loop.blocks';
import MathBlocks from './math.blocks';
import TextBlocks from './text.blocks';
import ListBlocks from './list.blocks';
import ColorBlocks from './color.blocks';

export default class CustomToolBox {
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
        <category name="%{BKY_CATVARIABLES}" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>
        <category name="%{BKY_CATFUNCTIONS}" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>
      </xml>
    `
    }
}