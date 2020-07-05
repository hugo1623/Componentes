import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  providers:[PeticionesService],
})
export class CochesComponent {

  public coche: Coche;
  public coches:Array<Coche>;

  constructor(  
    private _peticionesSerice: PeticionesService
    ){
  
    this.coche = new Coche('', '', '');
    this.coches = [
      new Coche('Tico', '1225','yelow'),
      new Coche('Nissan', '7725','black')
    ];

  }
  ngOnInit(){
    console.log(this._peticionesSerice.getPrueba());
  }
onSubmit(){
  this.coches.push(this.coche);
  this.coche = new Coche('', '', '');
}
}
