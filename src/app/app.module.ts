import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministracionComponent } from './componente/administracion/administracion.component';
import { EditarempresaComponent } from './componente/editarempresa/editarempresa.component';
import { EmpleadosComponent } from './componente/empleados/empleados.component';
import { HistoricomantenimientoComponent } from './componente/historicomantenimiento/historicomantenimiento.component';
import { ListaempleadosComponent } from './componente/listaempleados/listaempleados.component';
import { LoginComponent } from './componente/login/login.component';
import { RegistroempresaComponent } from './componente/registroempresa/registroempresa.component';
import { RegistrousuarioComponent } from './componente/registrousuario/registrousuario.component';



@NgModule({
  declarations: [
    AppComponent,
    AdministracionComponent,
    EditarempresaComponent,
    EmpleadosComponent,
    HistoricomantenimientoComponent,
    ListaempleadosComponent,
    LoginComponent,
    RegistroempresaComponent,
    RegistrousuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
