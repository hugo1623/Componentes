import { Component } from '@angular/core';
import { Coche } from './coches/coches';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public coche: Coche;

  constructor(){
    this.coche = new Coche('', '', '');
  }

}
