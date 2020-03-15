import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Blockly from 'blockly';
import 'blockly/blocks';
import 'blockly/javascript';
import 'blockly/python';
import { saveAs } from 'file-saver';
import * as Br from 'blockly/msg/pt-br';
import { CustomToolboxService } from './blocks/custom-toolbox.service';
import 'custom-blocks/blocks'
@Component({
  selector: 'app-blockly-code',
  templateUrl: './blockly-code.component.html',
  styleUrls: ['./blockly-code.component.scss']
})
export class BlocklyCodeComponent implements OnInit, AfterViewInit {
  @ViewChild('blockly') blockyDiv: ElementRef;
  workspace: Blockly.Workspace
  filename = ""
  whatIsVisible = "blocos"
  code = ""
  toolbox
  constructor(customToolboxService: CustomToolboxService) {
    this.toolbox = customToolboxService.getToolbox()
  }

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
      grid:
      {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
      },
      trashcan: true,
      toolbox: this.toolbox
    } as Blockly.BlocklyOptions);
    Blockly.setLocale(Br);
  }

   save() {
    let xml = Blockly.Xml.workspaceToDom(this.workspace);
    var xml_text = Blockly.Xml.domToText(xml);
    console.log(xml_text);
    let blob = new Blob([xml_text], { type: "text/plain;charset=utf-8", });
    console.log(this.filename)
    // if(this.filename == ""){
    //   return window.alert("Defina um nome para o arquivo")
    // }
    saveAs(blob, this.filename)
  }

  load(xml_text) {
    var reader = new FileReader();
    reader.readAsText(xml_text.item(0))
    reader.onload = (ev) => {
      let file = ev.target.result.toString()
      var xml = Blockly.Xml.textToDom(file);
      Blockly.Xml.domToWorkspace(xml, this.workspace);

    }
  }
  async generateCode() {
    //@ts-ignore
    this.code = Blockly.Python.workspaceToCode(this.workspace)
    console.log(this.code)
    //f@ts-ignore
    // navigator.usb.requestDevice({ filters: [] }).then(async function (device) {
    //   console.log(await device.open());
    // });
  }

  changeExibition(state) {
    this.whatIsVisible = state
  }
}
