import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { SeccionUnoComponent } from './seccion-uno/seccion-uno.component';
import { SeccionDosComponent } from './seccion-dos/seccion-dos.component';
import { SeccionTresComponent } from './seccion-tres/seccion-tres.component';
import { SeccionCuatroComponent } from './seccion-cuatro/seccion-cuatro.component';
import { SeccionCincoComponent } from './seccion-cinco/seccion-cinco.component';

/* RUTAS */
import { routing } from '../app/app.routing';
import { NombresComponent } from './nombres/nombres.component';
import { NombreDetalleComponent } from './nombre-detalle/nombre-detalle.component';

/* SERVICIO CONSULTA NOMBRES */
import { ServicioConsultaNombresService } from '../app/servicio-consulta-nombres.service';
import { EjemplosComponent } from './ejemplos/ejemplos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SeccionUnoComponent,
    SeccionDosComponent,
    SeccionTresComponent,
    SeccionCuatroComponent,
    SeccionCincoComponent,
    NombresComponent,
    NombreDetalleComponent,
    EjemplosComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    ServicioConsultaNombresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
