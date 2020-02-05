import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescendenciaProfileComponent } from './descendencia-profile.component';

describe('DescendenciaProfileComponent', () => {
  let component: DescendenciaProfileComponent;
  let fixture: ComponentFixture<DescendenciaProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescendenciaProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescendenciaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
