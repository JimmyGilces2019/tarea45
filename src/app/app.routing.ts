import { Routes,RouterModule } from '@angular/router';

/*COMPONENTES*/
import { SeccionUnoComponent } from '../app/seccion-uno/seccion-uno.component';
import { SeccionDosComponent } from '../app/seccion-dos/seccion-dos.component';
import { SeccionTresComponent } from '../app/seccion-tres/seccion-tres.component';
import { SeccionCuatroComponent } from '../app/seccion-cuatro/seccion-cuatro.component';
import { SeccionCincoComponent } from '../app/seccion-cinco/seccion-cinco.component';
import { NombresComponent } from '../app/nombres/nombres.component';
import { NombreDetalleComponent } from '../app/nombre-detalle/nombre-detalle.component';
import { EjemplosComponent } from '../app/ejemplos/ejemplos.component';

const rutas:Routes = [
    {path:"routing", component: SeccionUnoComponent},
    {path:"databind", component: SeccionDosComponent},
    {path:"tres",component:SeccionTresComponent},
    {path:"cuatro",component:SeccionCuatroComponent},
    {path:"cinco",component:SeccionCincoComponent},
    {path:"personas",component:NombresComponent},
    {path:"ejemplos",component:EjemplosComponent},
    {path:"persona/:id",component:NombreDetalleComponent},
    {path:"**",pathMatch:"full",redirectTo:"uno"}
];

export const routing = RouterModule.forRoot(rutas);