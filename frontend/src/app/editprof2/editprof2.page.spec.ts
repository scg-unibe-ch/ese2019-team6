import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Editprof2Page } from './editprof2.page';

describe('Editprof2Page', () => {
  let component: Editprof2Page;
  let fixture: ComponentFixture<Editprof2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editprof2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Editprof2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
