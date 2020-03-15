const Blockly = require('blockly')

var timeSleepJson = {
    "message0": "set sleep time %1",
    "args0": [
        { "type": "input_value", "name": "TIME", "check": "Number" }
    ],
    "previousStatement": "Action",
    "nextStatement": null,
}

Blockly.Blocks['timeSleep_set'] = {
    init: function () {
        this.jsonInit(timeSleepJson);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function () {
            return 'Set mode of "%1".'.replace('%1',
                thisBlock.getFieldValue('VAR'));
        });
    }
};

Blockly.Python['timeSleep_set'] = function (block) {
    // String or array length.
    var value = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_NONE) || '1';
    var code = `time.sleep(${value}) \n`;
    console.log("Codigo", code)
    return code;
};