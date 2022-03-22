import { PrimoComponent } from './components/primo/primo.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';
import { FactorialesComponent } from './components/factoriales/factoriales.component';
import { TrianguloComponent } from './components/triangulo/triangulo.component';
import { EdadComponent } from './components/edad/edad.component';
import { HomeComponent } from './components/home/home.component';
import { NumParComponent } from './components/num-par/num-par.component';
import { CalcuFicicaComponent } from './components/calcu-ficica/calcu-ficica.component';
import { BasicoComponent } from './components/basico/basico.component';
import { Routes } from '@angular/router';



export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'edad', component: EdadComponent },
  { path: 'primo', component: PrimoComponent },
  { path: 'num_par', component: NumParComponent },
  { path: 'triangulo', component: TrianguloComponent },
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'factoriales', component: FactorialesComponent },
  { path: 'calcu_fisica', component: CalcuFicicaComponent },
  { path: 'basico', component: BasicoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
]




