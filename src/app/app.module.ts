import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProveedoresService} from './servicios/proveedores.service';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { FormsModule } from '@angular/forms';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PresupuestosService } from './servicios/presupuestos.service';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { InisesComponent } from './autenticacion/inises/inises.component';
import {GuardService} from './servicios/guard.service';



  const config = {
    apiKey: "AIzaSyBTYA_wbQF8_pEUGyeeNDZEenjTQXwNdU4",
    authDomain: "comprasapp-d8c61.firebaseapp.com",
    databaseURL: "https://comprasapp-d8c61.firebaseio.com",
    projectId: "comprasapp-d8c61",
    storageBucket: "comprasapp-d8c61.appspot.com",
    messagingSenderId: "209703139903",
    appId: "1:209703139903:web:7b6964dbe6b96ae61dd68a",
    measurementId: "G-RKRTWHEVB7"
  }

  const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'proveedores', component: ProveedoresComponent, canActivate: [GuardService] },
    {path: 'editpres/:id', component: EditpresComponent, canActivate: [GuardService] },
    {path: 'addprovee', component: AddproveeComponent, canActivate: [GuardService]},
    {path: 'presupuestos', component: PresupuestosComponent, canActivate: [GuardService] },
    {path: 'addpres', component: AddpresComponent, canActivate: [GuardService]},
    { path: 'registro', component: RegistroComponent },
    { path: 'iniciosesion', component: InisesComponent },
    { path: '**', component: InicioComponent}
     ];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProveedoresService, PresupuestosService, AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
