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

  message = '';
  private heroes = [];
  selectedHero = [];



  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<Hero[]>('https://akabab.github.io/superhero-api/api/all.json').subscribe(heroes => {
      this.heroes = heroes;
      this.selectedHero.push(heroes[this.hasard(0, 500)]);
      this.selectedHero.push(heroes[this.hasard(0, 500)]);
      console.log(this.selectedHero);

    });

  }

  hasard(min, max) {

    return min + Math.floor(Math.random() * (max - min + 1));
  }

  fight() {
    if (this.selectedHero[0].powerstats.combat + this.hasard(0, 50) > this.selectedHero[1].powerstats.combat + this.hasard(0, 50)) {
      console.log('win 1');
      this.message = 'Player 1 WIN !!!';

    } else {
      console.log('win 2');
      this.message = 'Player 2 WIN !!!';

    }
  }

  changePlayer(id) {
    this.selectedHero[id] = this.heroes[this.hasard(0, 500)];
  }


}


