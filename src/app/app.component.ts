import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


interface Hero {
  id: number;
  name: string;
  image: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {


  private heroes = [];



  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<Hero[]>('https://akabab.github.io/superhero-api/api/all.json').subscribe(heroes => {
      this.heroes = heroes;
    });

  }



}