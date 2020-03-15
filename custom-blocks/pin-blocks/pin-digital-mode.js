const Blockly = require('blockly')
// p_out = Pin('GP2', mode=Pin.OUT)

var pinDigitalModeJson = {
    "message0": "%1",
    "args0": [{
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
            ["HIGH", "1"],
            ["LOW", "0"]
        ]
    }],
    "output": "String",
}

Blockly.Blocks['pinDigitalMode_set'] = {
    init: function () {
        this.jsonInit(pinDigitalModeJson);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function () {
            return 'Set mode of "%1".'.replace('%1',
                thisBlock.getFieldValue('VAR'));
        });
    }
};

Blockly.Python['pinDigitalMode_set'] = function (block) {
    // String or array length.
    var operator = block.getFieldValue('MODE');
    var code = `${operator}`;
    console.log("Codigo", operator)
    return [code, ''];
};