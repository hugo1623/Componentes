import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
})
export class EmpleadoComponent {

  public titulo = 'Componente Empleado';
  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public trabajadorExterno:boolean;
  public color:string;

  constructor() {
    this.empleado = new Empleado('Hugo Luis', 25, 'Desarrollador', true);
    this.trabajadores = [
      new Empleado('Ippo', 25, 'Desarrollador', true),
      new Empleado('Kyra ', 24, 'Analista', false),
      new Empleado('Dayron', 21, 'Diseñador', true),
    ];
    this.trabajadorExterno = true;
    this.color = 'chartreuse';
  }

  ngOnInit() {
    console.log(this.empleado);
    console.log(this.trabajadores);
  }
  cambiarExterno(valor){
    this.trabajadorExterno = valor ;
  }
}
