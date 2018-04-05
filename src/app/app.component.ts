import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'KougniaMan';
  results = '';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('https://akabab.github.io/superhero-api/api//id/1.json').subscribe(data => {
      console.log(data);
    });
  }
}

// import HttpClient & methode & cdn api.

