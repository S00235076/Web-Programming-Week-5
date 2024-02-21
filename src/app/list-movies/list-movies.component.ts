import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MovieService} from '../myservices/movie.service';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {
movies:any[]=[];
constructor(private movieService:Movieservice) {}

ngOnInit () {
  this.movies = this.movieService.getMovies();
  console.log(this.movies);
}
}
