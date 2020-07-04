import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
})
export class FrutaComponent {
  public nombre_componete = ` Componente de Fruta`;
  public listado_frutas = ` Naranja, Manzana, Pera, Sandia`;

  public nombre: string;
  public edad: number;
  public mayorDeEdad: boolean;
  public trabajos: Array<string> = ['Programador', 'Diseñador', 'Analista'];
  constructor() {
    this.nombre = ' Hugo Luis - R';
    this.edad = 25;
    this.mayorDeEdad = false;
  }
  ngOnInit() {
    this.cambiarNombre();
    this.cambiarEdad();
    alert(this.nombre + ' = ' + this.edad);
  }
  cambiarNombre() {
    this.nombre = 'Kyra';
  }
  
  cambiarEdad() {
    this.edad = 20;
  }
}
