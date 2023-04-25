import { Component } from '@angular/core';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.component.html',
  styleUrls: ['./registrousuario.component.scss']
})
export class RegistrousuarioComponent {
  email: string='';
  password: string='';
  confirmPassword: string='';

  constructor() {}

  register() {
    console.log(this.email);
    console.log(this.password);
  }
  
}
