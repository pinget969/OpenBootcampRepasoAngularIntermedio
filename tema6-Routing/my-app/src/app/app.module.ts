import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Module Material
import { MatFormFieldModule } from '@angular/material/form-field';
//Locale para Pipes
import { registerLocaleData } from '@angular/common';
import localesES from '@angular/common/locales/es';
registerLocaleData(localesES); //registramos el LOCALE_ID de 'es' para poder usarlo en los pipe.
//module customized 
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalculadorPuntuacionPipe } from './pipes/calculador-puntuacion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ContactsPageComponent,
    ContactDetailPageComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    CalculadorPuntuacionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //Importacion Reactive FormsModule para  formularios Reactivos
    ReactiveFormsModule,
    //Importamos los módulos de angular material para hacer formularios.
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [
    //Registar el Locale de ES para que los PIPES salgan en espáñol.
    {
      provide: LOCALE_ID, useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
