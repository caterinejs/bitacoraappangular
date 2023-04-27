import { Component } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-registroempresa',
  templateUrl: './registroempresa.component.html',
  styleUrls: ['./registroempresa.component.scss']
})
export class RegistroempresaComponent {
  nit: string='';
  nombreusuario: string='';
  telefono: string='';
  email: string='';
  password: string='';
  confirmPassword: string='';
  tipousuario:string='';
  tiposuscriptor:string='';

  constructor() {}

  register() {
    console.log(this.email);
    console.log(this.password);
  }

}
