import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import {CardComponent } from "./Components/card/card.component";
import { SearchService } from "./Service/search.service";
import { SearchComponent } from "./Components/search/search.component";
import { Dato } from './Models/array';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {
	title = 'App-Peliculas';
	public user_search:string;
	public funcion_buscar:SearchComponent;

	public ruta:boolean;;

	public fill:string;
	private dato:Dato;


	constructor() {
		this.ruta = true;
		this.dato = new Dato();
	}

	ngOnInit(): void {

	}


	cambiar_valor() {
		this.ruta = true;
	}

	ngDoCheck() {
		localStorage.setItem("Busqueda", this.user_search);
		this.fill = localStorage.getItem("Busqueda");
	}

	clear_text() {
		this.user_search = "";
		this.ruta = false;
		this.dato.dato_general = [];
	}
	
}
