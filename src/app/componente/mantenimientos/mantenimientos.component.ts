import { Component } from '@angular/core';

@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.component.html',
  styleUrls: ['./mantenimientos.component.scss']
})
export class MantenimientosComponent {
  fecharecibido: string='';
  nombreempresa: string='';
  tipodocumento: string='';
  numerodocumento: string='';
  telefono: string='';
  email: string='';
  direccioninmueble: string='';
  barrio: string='';
  municipio: string='';
  categoria: string='';
  zona : string='';
  descripcion: string='';
  adjuntararchivo: string='';

  constructor() {}

  register() {
    console.log(this.email);
    console.log(this.descripcion);
  }

  
}
