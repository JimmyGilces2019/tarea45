import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.css']
})
export class EjemplosComponent implements OnInit {
  counter:string = '00';
  count:number = 0;

  counter_m:string = '00';
  count_m:number = 0;

  addCount(){
    this.count_m++;
    if(this.count_m < 10){
      this.counter_m = '0' + this.count_m;
    }else{
      if(this.count_m > 20){
        this.counter_m = '00';
        this.count_m = 0;
      }else{
        this.counter_m = <string>  <unknown>this.count_m;
      }
    }
  }

  habilitarBoton:boolean = false;
  textBoton:string = "Botón Deshabilitado";

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.textBoton = "Botón Habilitado";
      this.habilitarBoton = !this.habilitarBoton;
    }, 2000);

    setInterval(()=>{
      if(this.count < 10){
        this.counter = '0'+this.count;
      }else{
        if(this.count == 21){
          this.counter = '00';
          this.count = 0;
        }else{
          this.counter = <string>  <unknown>this.count;
        }
      }
      this.count++;
    },500);
  }

}
