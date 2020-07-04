import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers:[RopaService]
})
export class HomeComponent  {

  public titulo = "Página principal";
  constructor(
    private _ropaService:RopaService,
  ){}
  ngOnInit(){
    console.log(this._ropaService.prueba());
  }



}
