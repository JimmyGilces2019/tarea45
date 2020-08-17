import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreDetalleComponent } from './nombre-detalle.component';

describe('NombreDetalleComponent', () => {
  let component: NombreDetalleComponent;
  let fixture: ComponentFixture<NombreDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NombreDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NombreDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
