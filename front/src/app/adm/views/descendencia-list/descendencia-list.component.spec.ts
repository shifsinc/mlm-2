import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescendenciaListComponent } from './descendencia-list.component';

describe('DescendenciaListComponent', () => {
  let component: DescendenciaListComponent;
  let fixture: ComponentFixture<DescendenciaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescendenciaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescendenciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
