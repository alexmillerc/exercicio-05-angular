import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './movieSearch.component.html',
  styleUrls: ['./movieSearch.component.css']
})
export class MovieSearchComponent implements OnInit {

  @Output() filter = "";
  @Output() newFilterEvent = new EventEmitter<string>();

  onInputChange(name: string){
    const handleString = name.charAt(0).toUpperCase() + name.substr(1);
    this.newFilterEvent.emit(handleString);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
