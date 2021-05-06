//Importo los modulos necesarios 
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


//Importo mis componetnes
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/search.component';
import { ErrorComponent } from './Components/error/error.component';


//Creo mis rutas

const app_routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "search", component: SearchComponent},
    {path: "**", component: ErrorComponent}
];

export const app_routing_providers: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(app_routes, {useHash: true}); 

