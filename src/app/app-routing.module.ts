import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdministracionComponent } from './componente/administracion/administracion.component';
import { EditarempresaComponent } from './componente/editarempresa/editarempresa.component';
import { EmpleadosComponent } from './componente/empleados/empleados.component';
import { HistoricomantenimientoComponent } from './componente/historicomantenimiento/historicomantenimiento.component';
import { ListaempleadosComponent } from './componente/listaempleados/listaempleados.component';
import { LoginComponent } from './componente/login/login.component';
import { HomeComponent } from './componente/home/home.component';
import { RegistroempresaComponent } from './componente/registroempresa/registroempresa.component';
import { RegistrousuarioComponent } from './componente/registrousuario/registrousuario.component';
import { EmpresasComponent } from './componente/empresas/empresas.component';
import { MantenimientosComponent } from './componente/mantenimientos/mantenimientos.component';
const routes: Routes = [

  {path:'home', component:HomeComponent },
  {path:'login', component:LoginComponent },
  {path:'administracion', component:AdministracionComponent },
  {path:'empleados', component:EmpleadosComponent},
  {path:'empresas', component:EmpresasComponent},
  {path:'editarempresa', component:EditarempresaComponent },
  {path:'historicomantenimiento', component:HistoricomantenimientoComponent },
  {path:'registroempresa', component:RegistroempresaComponent},
  {path:'registrousuario', component:RegistrousuarioComponent },
  {path:'listaempleados', component:ListaempleadosComponent },
  {path:'mantenimientos', component:MantenimientosComponent },
  {path:'**', component:HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
