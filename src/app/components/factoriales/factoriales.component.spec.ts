import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorialesComponent } from './factoriales.component';

describe('FactorialesComponent', () => {
  let component: FactorialesComponent;
  let fixture: ComponentFixture<FactorialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactorialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
