import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalleProyectoComponent } from './pages/detalle-proyecto/detalle-proyecto.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'projects/:id', component: DetalleProyectoComponent }

];