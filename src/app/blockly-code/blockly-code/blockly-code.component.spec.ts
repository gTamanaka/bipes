import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocklyCodeComponent } from './blockly-code.component';

describe('BlocklyCodeComponent', () => {
  let component: BlocklyCodeComponent;
  let fixture: ComponentFixture<BlocklyCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocklyCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocklyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
