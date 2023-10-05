import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelesComponent } from './paginas/hoteles/hoteles.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { DepartamentosComponent } from './paginas/departamentos/departamentos.component';
import { ComidarapidaComponent } from './paginas/comidarapida/comidarapida.component';
import { ComidagourmetComponent } from './paginas/comidagourmet/comidagourmet.component';
import { LugareshistoricosComponent } from './paginas/lugareshistoricos/lugareshistoricos.component';
import { DeportesComponent } from './paginas/deportes/deportes.component';
import { HomeComponent } from './paginas/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hoteles', component: HotelesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'departamentos', component: DepartamentosComponent },
  { path: 'comidarapida', component: ComidarapidaComponent },
  { path: 'comidagourmet', component: ComidagourmetComponent },
  { path: 'LugaresHistoricos', component: LugareshistoricosComponent }, 
  { path: 'Deportes', component: DeportesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
