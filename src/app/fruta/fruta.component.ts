import { Component } from '@angular/core';

@Component({
    selector:'fruta',
    templateUrl:'./fruta.component.html',

})
export class FrutaComponent{
    public nombre_componete =` Componente de Fruta`;
    public listado_frutas =` Naranja, Manzana, Pera, Sandia`;

    public nombre:string ='Hugo Luis Rodriguez';
    public edad:number= 25;
    public mayorDeEdad:boolean= true;
    public trabajos:Array<string>=['Programador','Diseñador','Analista'];
    

}