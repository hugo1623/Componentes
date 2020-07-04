import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
  public nombrePrenda = 'Pantalones';
  public coleccionRopa = ['Pantalones Negros', 'Polos', 'Camisas'];
  prueba() {
    return this.nombrePrenda;
  }
  addRopa(nombrePrenda:string):Array<string> {
    this.coleccionRopa.push(nombrePrenda);

    return this.getRopa();
  }
  deleteRopa(index:number){
    this.coleccionRopa.splice(index,1);
    return this.getRopa();

  }
  getRopa():Array<string> {
    return this.coleccionRopa;
  }
}
