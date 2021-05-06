import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Dato } from '../../Models/array';
import { SearchService } from "../../Service/search.service";
import { AppComponent } from "../../app.component";
import {Router} from '@angular/router';


declare const $:any;
  
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {

	public dato_2:Dato;
	private array_temporal: any[];
	public search_array:any[];
	public find:string;

	public app:AppComponent;


	constructor( public _peticion_search:SearchService, private router:Router  ) {
		this.dato_2 = new Dato();
		this.dato_2.dato_general = [];
		this.array_temporal = [];
		this.search_array = [];

		this.app = new AppComponent();
	}
	 

	 ngOnInit(): void {

	}

	//Metodo para recoger datos si estamos en search
	funct_search(dato:string) {
		$(document).ready(() => {
			//Eliminamos los elementos que hayan en el componente 
			let elementos = $('#new div');
			if (elementos.length != 0) {
				for (let i = 0; i < elementos.length; i++) {
					elementos[i].remove();
				}
			}
			
			try {
				//Recogemos los datos y los introducimos al array
				console.log(dato);
				this._peticion_search.search_movies(dato).subscribe(
					result => {
						this.array_temporal.push(result.Search);
						console.log(this.array_temporal[0][0].Title);
						for (let i = 0; i < result.Search.length; i++) {

							let plantilla = `
								<div class="card-container">
									<div class="card card_2" style="width: 18rem;">
										<img class="card-img-top img-fluid poster_2" src=${result.Search[i].Poster} alt="IMAGEN NO DISPONIBLE">
										<div class="card-body">
											<h5 class="card-title">${result.Search[i].Title}</h5>
											<p class="year">AÑO: ${result.Search[i].Year}</p>
											<hr class="bg-light"/>	
											<p class="id_pelicula">ID: ${result.Search[i].imdbID}</p>
										</div>
									</div>
								</div>
							`;
							$('#new').append(plantilla);
						}
						const boton_search = $('.boton_press');
						boton_search.click(() => {
							this.navegar_pagina();
						});

						boton_search.click(function() {
							let boton_id = $(this).attr('id');
							//console.log(result.Search[boton_id]);
							const table_elements = $('.datos');
							console.log(table_elements);
							
						});

					},

					error => {
						console.log("Error al conectar con el servidor: " + error);
					}
				);
			}
			catch(error) {
				alert("Demasiados resultados para: " + dato);
			}
		});

	}

	navegar_pagina() {
		this.router.navigate(['details']);
	}

	alertar(texto:string) {
		alert(texto);
	}

}
