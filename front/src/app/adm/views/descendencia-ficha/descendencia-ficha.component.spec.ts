import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescendenciaFichaComponent } from './descendencia-ficha.component';

describe('DescendenciaFichaComponent', () => {
  let component: DescendenciaFichaComponent;
  let fixture: ComponentFixture<DescendenciaFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescendenciaFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescendenciaFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
