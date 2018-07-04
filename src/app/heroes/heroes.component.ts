import { Component, OnInit } from '@angular/core';

import { Human } from '../app';
import { HUMANS } from '../mock-humans'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  humans = HUMANS;
  selectedHuman: Human;
  constructor() { }

  ngOnInit() {
  }

  onSelect(human: Human): void {
    this.selectedHuman = human;
  }

}
