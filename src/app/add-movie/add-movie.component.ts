import { Component } from '@angular/core';

import {MovieService} from '../myservices/movie.service';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {

  constuctor (private movieService:MovieService) {}

  addNewMovie(movietitle:HTMLInputElement, moviedirector:HTMLInputElement,movieyear:HTMLInputElement):boolean {
    this.movieService.addMovie(movietitle.value,moviedirector.value,movieyear.value):
    return false;
  }

  

}
