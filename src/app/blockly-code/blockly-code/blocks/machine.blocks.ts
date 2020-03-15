export default class MachineBlocks{
    getBlocks(){
        return `
        <category name="Machine" colour="%{BKY_COLOUR_HUE}">
        <block type="pinMode_set"></block>
        <block type="pinDigitalMode_set"></block>
        <block type="pinModeValue_set"></block>
        <block type="pinRewrite_change"></block>
        <block type="timeSleep_set"></block>
        </category>
        `
    }
}