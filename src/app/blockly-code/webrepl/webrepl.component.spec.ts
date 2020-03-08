import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebreplComponent } from './webrepl.component';

describe('WebreplComponent', () => {
  let component: WebreplComponent;
  let fixture: ComponentFixture<WebreplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebreplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebreplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
