import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioConsultaNombresService } from '../../app/servicio-consulta-nombres.service';

@Component({
  selector: 'app-nombre-detalle',
  templateUrl: './nombre-detalle.component.html',
  styleUrls: ['./nombre-detalle.component.css']
})
export class NombreDetalleComponent implements OnInit {

  persona = {};

  constructor(private servicioConsultaNombresService:ServicioConsultaNombresService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(id=>{
      
      this.persona = this.servicioConsultaNombresService.getNombre(id['id']);
      
    })
    console.log(this.persona);
  }

}
