import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofPage } from './editprof.page';

describe('EditprofPage', () => {
  let component: EditprofPage;
  let fixture: ComponentFixture<EditprofPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
