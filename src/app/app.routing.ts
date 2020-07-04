import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// Importar componentes
import { EmpleadoComponent} from './empleado/empleado.component';
import { FrutaComponent} from './fruta/fruta.component';
import {HomeComponent} from './home/home.component';
import {ContactoComponent}from './contacto/contacto.component';

const appRoutes: Routes =[
    {path:'', component: HomeComponent},
    {path:'empleado',component: EmpleadoComponent},
    {path:'home',component: HomeComponent},
    {path:'contacto',component: ContactoComponent},
    {path:'fruta',component:FrutaComponent},
    {path:'**', component: HomeComponent}, 
];
export const appRoutinProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

