import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPage } from './default-page.component';

describe('DefaultComponent', () => {
  let component: DefaultPage;
  let fixture: ComponentFixture<DefaultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
