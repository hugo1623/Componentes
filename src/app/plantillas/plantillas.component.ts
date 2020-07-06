import { Component} from '@angular/core';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html', 
  // styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent {
  public titulo;
  public administrador;
  constructor() { 
    this.titulo= "Plantillas ngTemplate en Angular";
    this.administrador = true;

  }
  cambiar(value){
    this.administrador=value;
  }


}
