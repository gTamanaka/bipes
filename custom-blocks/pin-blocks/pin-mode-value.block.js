const Blockly = require('blockly')
// p_out = Pin('GP2', mode=Pin.OUT)

var pinModeValueJson = {
    "message0": "%1",
    "args0": [{
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
            ["OUT", "OUT"],
            ["IN", "IN"]
        ]
    }],
    "output": "String",
}

Blockly.Blocks['pinModeValue_set'] = {
    init: function () {
        this.jsonInit(pinModeValueJson);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function () {
            return 'Set mode of "%1".'.replace('%1',
                thisBlock.getFieldValue('VAR'));
        });
    }
};

Blockly.Python['pinModeValue_set'] = function (block) {
    // String or array length.
    var operator = block.getFieldValue('MODE');
    var code = `${operator}`;
    console.log("Codigo", operator)
    return [code, ''];
};