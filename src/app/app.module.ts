import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { MonedasorigenComponent } from './components/monedasorigen/monedasorigen.component';
import { TipodecambioComponent } from './components/tipodecambio/tipodecambio.component';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    PerfilesComponent,
    MonedasorigenComponent,
    TipodecambioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
