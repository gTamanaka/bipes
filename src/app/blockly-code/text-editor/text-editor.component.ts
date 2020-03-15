import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnChanges } from '@angular/core';
import CodeFlask from 'codeflask';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('codeFlask') codeFlask: ElementRef
  @Input() codigo;
  flask;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.flask = new CodeFlask(this.codeFlask.nativeElement, {
      language: 'python', lineNumbers: true
    });
    console.log(this.codigo)
    this.flask.updateCode('const my_new_code_here = "Blabla"');
    this.flask.addLanguage('python')
  }
  ngOnChanges(){
    console.log(this.codigo)
    this.flask.updateCode(this.codigo);
  }
  

}
