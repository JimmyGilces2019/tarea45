import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioConsultaNombresService {

  nombres: any = [
    {
      id: 0,
      nombres: 'Jimmy Rene',
      apellidos: 'Gilces Vargas',
      edad: 26,
      nivel_instruccion: 'Superior',
      estado_civil: 'Soltero',
      correo_electronico: 'jimmygilces@gmail.com'
    },
    {
      id: 1,
      nombres: 'Jose Enrique',
      apellidos: 'Bartolome Fernandez',
      edad: 32,
      nivel_instruccion: 'Superior',
      estado_civil: 'Casado',
      correo_electronico: 'jefernan@hotmail.com'
    },
    {
      id: 2,
      nombres: 'Michelle Alejandra',
      apellidos: 'Lidia Anchundia',
      edad: 18,
      nivel_instruccion: 'Bachillerato',
      estado_civil: 'Casada',
      correo_electronico: 'laamichelle@gmail.com'
    }
  ]

  constructor() { }

  getNombres():any{
    return this.nombres;
  }

  getNombre(id_persona:number):any{
    let persona:any;
    
    this.nombres.forEach((element: any) => {
      if (element.id == id_persona) persona = element;
    });
    return persona;
  }
}
