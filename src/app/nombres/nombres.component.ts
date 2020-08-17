import { Component, OnInit } from '@angular/core';
import { ServicioConsultaNombresService } from '../../app/servicio-consulta-nombres.service';
@Component({
  selector: 'app-nombres',
  templateUrl: './nombres.component.html',
  styleUrls: ['./nombres.component.css']
})
export class NombresComponent implements OnInit {

  personas = [];

  constructor(private servicioConsultaNombresService:ServicioConsultaNombresService) { }

  ngOnInit(): void {
    this.personas = this.servicioConsultaNombresService.getNombres();
  }

}
