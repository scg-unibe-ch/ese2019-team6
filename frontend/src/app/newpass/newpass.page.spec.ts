import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewpassPage } from './newpass.page';

describe('NewpassPage', () => {
  let component: NewpassPage;
  let fixture: ComponentFixture<NewpassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
