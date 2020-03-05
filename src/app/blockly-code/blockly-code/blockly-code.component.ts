import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Blockly from 'blockly';
import 'blockly/blocks';
import 'blockly/javascript';
import 'blockly/python';

@Component({
  selector: 'app-blockly-code',
  templateUrl: './blockly-code.component.html',
  styleUrls: ['./blockly-code.component.scss']
})
export class BlocklyCodeComponent implements OnInit, AfterViewInit {
  @ViewChild('blockly') blockyDiv: ElementRef;
  @ViewChild('toolbox') toolbox: ElementRef
  workspace: Blockly.Workspace
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.workspace = Blockly.inject(this.blockyDiv.nativeElement, {
      readOnly: false,
      move: {
        scrollbars: true,
        drag: true,
        wheel: true
      },
      toolbox: `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox-simple" style="display: none">
        <block type="controls_ifelse"></block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_boolean"></block>
        <block type="logic_null" disabled="true"></block>
        <block type="logic_ternary"></block>
        <block type="text_charAt">
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR">text</field>
                </block>
            </value>
        </block>
      </xml>
        `
    } as Blockly.BlocklyOptions);
  }

  save(){
    let xml = Blockly.Xml.workspaceToDom(this.workspace);
    var xml_text = Blockly.Xml.domToText(xml);
    console.log(xml_text);
  }
  generateCode(){
    //@ts-ignore
    let code = Blockly.Python.workspaceToCode(this.workspace)
    console.log(code)
  }
}
