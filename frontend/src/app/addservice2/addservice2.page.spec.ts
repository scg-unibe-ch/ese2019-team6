import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addservice2Page } from './addservice2.page';

describe('Addservice2Page', () => {
  let component: Addservice2Page;
  let fixture: ComponentFixture<Addservice2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addservice2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addservice2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
