const Blockly = require('blockly')

var pinWriteJson = {
    "message0": "put %2 in %1",
    "args0": [
        { "type": "input_value", "name": "VAR"},
        { "type": "input_value", "name": "DELTA", "check": "Number" }
    ],
    "previousStatement": "Action",
    "nextStatement": null,
    "colour": 230
};

Blockly.Blocks['pinRewrite_change'] = {
    init: function () {
        this.jsonInit(pinWriteJson);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function () {
            return 'Add a number to variable "%1".'.replace('%1',
                thisBlock.getFieldValue('VAR'));
        });
    }
};

Blockly.JavaScript['pinRewrite_change'] = function(block) {
    // String or array length.
    var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
        Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
    return [argument0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
  };