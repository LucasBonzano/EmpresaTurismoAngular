import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesModule } from '../componentes/componentes.module';
import { ContactoComponent } from './contacto/contacto.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { ComidarapidaComponent } from './comidarapida/comidarapida.component';
import { ComidagourmetComponent } from './comidagourmet/comidagourmet.component';
import { DeportesComponent } from './deportes/deportes.component';
import { LugareshistoricosComponent } from './lugareshistoricos/lugareshistoricos.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ContactoComponent,
    HotelesComponent,
    DepartamentosComponent,
    ComidarapidaComponent,
    ComidagourmetComponent,
    DeportesComponent,
    LugareshistoricosComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ],
  exports:[
    ContactoComponent,
    HotelesComponent,
    DepartamentosComponent,
    ComidarapidaComponent,
    ComidagourmetComponent,
    DeportesComponent,
    LugareshistoricosComponent
  ]
})
export class PaginasModule { }
