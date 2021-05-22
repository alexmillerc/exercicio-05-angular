import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movieList.component.html',
  styleUrls: ['./movieList.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies: Object;

  constructor() { }

  ngOnInit(): void {
  }

}
