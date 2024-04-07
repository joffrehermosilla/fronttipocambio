import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { MonedasorigenComponent } from './components/monedasorigen/monedasorigen.component';
import { TipodecambioComponent } from './components/tipodecambio/tipodecambio.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'tipodecambio'},
  {path:'usuarios',component:UsuariosComponent},
  {path:'perfiles',component:PerfilesComponent},
  {path:'monedasorigen',component:MonedasorigenComponent},
  {path:'tipodecambio',component:TipodecambioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
