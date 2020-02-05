import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeContextComponent } from './type-context.component';

describe('TypeContextComponent', () => {
  let component: TypeContextComponent;
  let fixture: ComponentFixture<TypeContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
