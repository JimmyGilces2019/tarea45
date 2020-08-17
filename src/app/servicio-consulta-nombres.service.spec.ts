import { TestBed } from '@angular/core/testing';

import { ServicioConsultaNombresService } from './servicio-consulta-nombres.service';

describe('ServicioConsultaNombresService', () => {
  let service: ServicioConsultaNombresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioConsultaNombresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
