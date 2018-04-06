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
    // console.log( min + Math.floor(Math.random() * (max - min + 1)));

    return min + Math.floor(Math.random() * (max - min + 1));
  }

  fight() {
    if (this.selectedHero[0].powerstats.combat + this.hasard(0, 50) > this.selectedHero[1].powerstats.combat + this.hasard(0, 50)) {
      console.log('win 1');

    } else {
      console.log('win 2');

    }
  }

  changePlayer(id) {
    this.selectedHero[id] = this.heroes[this.hasard(0, 500)];
  }


}

// for (let i = 0; i < 6; i++) {
//   console.log(hasard(1, 20));

// }



// document.getElementById("demo").onclick = function () { myFunction() };

// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }
// </script>
