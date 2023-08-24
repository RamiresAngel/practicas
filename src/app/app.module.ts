import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/compartidos/navbar/navbar.component';

// rutas de mi aplicacion
import { HomeComponent } from './components/home/home.component';
import { EdadComponent } from './components/edad/edad.component';
import { NumParComponent } from './components/num-par/num-par.component';
import { TrianguloComponent } from './components/triangulo/triangulo.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';
import { FactorialesComponent } from './components/factoriales/factoriales.component';
import { PrimoComponent } from './components/primo/primo.component';
import { CalcuFicicaComponent } from './components/calcu-ficica/calcu-ficica.component';
import { BasicoComponent } from './components/basico/basico.component';
import { RickMortyComponent } from './components/rick-morty/rick-morty.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EdadComponent,
    NumParComponent,
    TrianguloComponent,
    NavbarComponent,
    CalculadoraComponent,
    FibonacciComponent,
    FactorialesComponent,
    PrimoComponent,
    CalcuFicicaComponent,
    BasicoComponent,
    RickMortyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
