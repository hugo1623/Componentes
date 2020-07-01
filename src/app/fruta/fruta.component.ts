import { Component } from '@angular/core';

@Component({
    selector:'fruta',
    template: `
    <h2>{{nombre_componete}} </h2>
    <p>{{listado_frutas}} </p> `

})
export class FrutaComponent{
    public nombre_componete =` Componente de Fruta`;
    public listado_frutas =` Naranja, Manzana, Pera, Sandia`;

}