import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ routing, appRoutinProviders} from './app.routing'


import { AppComponent } from './app.component';
import { FrutaComponent} from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { from } from 'rxjs';
import {HomeComponent} from './home/home.component';
import {ContactoComponent}from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutinProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
