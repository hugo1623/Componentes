import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ routing, appRoutinProviders} from './app.routing'


import { AppComponent } from './app.component';
import { FrutaComponent} from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
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
