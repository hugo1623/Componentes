import { Component } from '@angular/core';
import { Coche } from './coche';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
})
export class CochesComponent {

  public coche: Coche;
  public coches:Array<Coche>;

  constructor(){
    this.coche = new Coche('', '', '');
    this.coches = [
      new Coche('Tico', '1225','yelow'),
      new Coche('Nissan', '7725','black')
    ];

  }
onSubmit(){
  this.coches.push(this.coche);
  this.coche = new Coche('', '', '');
}
}
