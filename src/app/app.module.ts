import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './components/movieSearch/movieSearch.component';
import { MovieListComponent } from './components/movieList/movieList.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
