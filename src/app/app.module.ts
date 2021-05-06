import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { routing, app_routing_providers } from "./app.routing";

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/search.component';
import { ErrorComponent } from './Components/error/error.component';
import { CardComponent } from './Components/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ErrorComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    routing,
  ],
  providers: [
    app_routing_providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
