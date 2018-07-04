import { Component, OnInit } from '@angular/core';

import { Human } from '../app';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  memo: Human = {
    id: 1,
    name: 'Memo',
    age: 10;
  };
  constructor() { }

  ngOnInit() {
  }

}
