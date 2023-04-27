import { Component } from '@angular/core';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent {
  public titulo: string;

	constructor(){
		this.titulo = 'Gestiona tus productos';
	}

	ngOnInit(){
		console.log('Se ha cargado el componente administracion.component.ts');
	}
}