const Blockly = require('blockly')
// p_out = Pin('GP2', mode=Pin.OUT)

var pinModeJson = {
    "message0": "set %1 mode in %2",
    "args0": [
        { "type": "field_variable", "name": "VAR", "variable": "item", "variableTypes": [""] },
        { "type": "input_value", "name": "DELTA", "check": "String" }
    ],
    "previousStatement": "Action",
    "nextStatement": null,
}

Blockly.Blocks['pinMode_set'] = {
    init: function () {
        this.jsonInit(pinModeJson);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function () {
            return 'Set mode of "%1".'.replace('%1',
                thisBlock.getFieldValue('VAR'));
        });
    }
};

Blockly.Python['pinMode_set'] = function (block) {
    // String or array length.
    var operator = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var value = Blockly.Python.valueToCode(block, 'DELTA', Blockly.Python.ORDER_NONE) || '1';
    var code = `${operator} = Pin('GP2',mode=Pin.${value}) \n`;
    console.log("Codigo", code)
    return code;
};