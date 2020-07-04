import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers:[RopaService]
})
export class HomeComponent  {

  public titulo = "Página principal";
  public listadoRopa:Array<string>;
  public prendaGuardada:string;
  public fecha;
  constructor(
    private _ropaService:RopaService,
  ){
    this.fecha = new Date(2020,7,4);
  }
  ngOnInit(){
    this.listadoRopa= this._ropaService.getRopa();
    console.log(this.listadoRopa);
  }
  guardarPrenda(){
    this._ropaService.addRopa(this.prendaGuardada)
    this.prendaGuardada = null;

  }
  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
    alert(index);

  }



}
