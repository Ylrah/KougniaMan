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
function hasard(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

for (let i = 0; i < 6; i++) {
  console.log(hasard(1, 20));

}



// document.getElementById("demo").onclick = function () { myFunction() };

// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }
// </script>
