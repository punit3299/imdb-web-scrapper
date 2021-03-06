import { Component, OnInit } from '@angular/core';
import { ImdbService } from 'src/app/services/imdb.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  top10MoviesByGenre:any;
  genre:string;
  genreLoader:boolean=true;

  constructor(private imdbService:ImdbService) { }
 
  ngOnInit() {
    this.genre=sessionStorage.genre;
    this.imdbService.getTop10MoviesByGenre(sessionStorage.genre).subscribe(data=>{
      this.top10MoviesByGenre=data;
      this.genreLoader=false;
    })
  }

}
