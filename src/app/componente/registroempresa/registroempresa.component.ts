import { Component } from '@angular/core';

@Component({
  selector: 'app-registroempresa',
  templateUrl: './registroempresa.component.html',
  styleUrls: ['./registroempresa.component.scss']
})
export class RegistroempresaComponent {
  email: string='';
  password: string='';
  confirmPassword: string='';

  constructor() {}

  register() {
    console.log(this.email);
    console.log(this.password);
  }

}
