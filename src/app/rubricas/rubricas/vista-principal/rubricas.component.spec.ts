import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricasComponent } from './rubricas.component';

describe('RubricasComponent', () => {
  let component: RubricasComponent;
  let fixture: ComponentFixture<RubricasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
