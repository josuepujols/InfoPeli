import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from "../../Service/home.service";
import { SearchService } from "../../Service/search.service";
import { Dato } from '../../Models/array';

declare const $:any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [HomeService, SearchService]
})
export class CardComponent implements OnInit {
	public dato: Dato;
	private datos_1: any[];
	private datos_2: any[];
	private datos_3: any[];
	private datos_4: any[];
	private datos_5: any[];
	private datos_6: any[];
	private controlar:number;

	
	constructor( private _peticion_home:HomeService ) {
		this.dato = new Dato();
		this.dato.dato_general = [];
		this.datos_1 = [];
		this.datos_2 = [];
		this.datos_3 = [];
		this.datos_4 = [];
		this.datos_5 = [];
		this.datos_6 = [];
		this.controlar = 0;
	}
	 
	 ngOnInit(): void {
		if (window.location.pathname == "/home" || window.location.pathname == "/") {
			if (this.controlar == 0) {
				this.home_movies();
			}
		}

  	}
	  
	//Metodo para recoger datos si estamos en la home 
	home_movies() {
		this.controlar++;
		console.log(this.controlar);
		this.dato.dato_general = [];
			for (let i = 0; i <= 5; i++) {
				if (i == 0) {
					this._peticion_home.get_movie("Harry Potter", 2001).subscribe(
						result => {
							this.datos_1.push(result.imdbID);
							this.datos_1.push(result.Title);
							this.datos_1.push(result.Year);
							this.datos_1.push(result.Type);
							this.datos_1.push(result.Poster);
							
							this.dato.dato_general.push(this.datos_1);

						},

						error => {
							console.log("Error al conectar con el servidor: " + error);
						}
					);	
				}

				else if (i == 1) {
					this._peticion_home.get_movie("Batman", 2008).subscribe(
						result => {
							this.datos_2.push(result.imdbID);
							this.datos_2.push(result.Title);
							this.datos_2.push(result.Year);
							this.datos_2.push(result.Type);
							this.datos_2.push(result.Poster);
							
							this.dato.dato_general.push(this.datos_2);
					
						},

						error => {
							console.log("Error al conectar con el servidor: " + error);
						}
					);
				}

				else if (i ==2) {
					this._peticion_home.get_movie("Spider man", 2004).subscribe(
						result => {
							this.datos_3.push(result.imdbID);
							this.datos_3.push(result.Title);
							this.datos_3.push(result.Year);
							this.datos_3.push(result.Type);
							this.datos_3.push(result.Poster);
							
							this.dato.dato_general.push(this.datos_3);

						
						},

						error => {
							console.log("Error al conectar con el servidor: " + error);
						}
					);	
				}

				else if (i == 3) {
					this._peticion_home.get_movie("Spiderwick", 2008).subscribe(
						result => {
							this.datos_4.push(result.imdbID);
							this.datos_4.push(result.Title);
							this.datos_4.push(result.Year);
							this.datos_4.push(result.Type);
							this.datos_4.push(result.Poster);
							
							this.dato.dato_general.push(this.datos_4);
							
		
						},

						error => {
							console.log("Error al conectar con el servidor: " + error);
						}
					);
				}

				else if (i == 4) {
					this._peticion_home.get_movie("Superman", 2016).subscribe(
						result => {
							this.datos_5.push(result.imdbID);
							this.datos_5.push(result.Title);
							this.datos_5.push(result.Year);
							this.datos_5.push(result.Type);
							this.datos_5.push(result.Poster);
							
							this.dato.dato_general.push(this.datos_5);
							
							
					
						},

						error => {
							console.log("Error al conectar con el servidor: " + error);
						}
					);	
				}

				else if (i == 5) {
					this._peticion_home.get_movie("Wall street", 2013).subscribe(
						result => {
							this.datos_6.push(result.imdbID);
							this.datos_6.push(result.Title);
							this.datos_6.push(result.Year);
							this.datos_6.push(result.Type);
							this.datos_6.push(result.Poster);
							
							this.dato.dato_general.push(this.datos_6);
						
						},

						error => {
							console.log("Error al conectar con el servidor: " + error);
						}
					);
				}
			}
			console.log(this.dato.dato_general);
			
	}
}
