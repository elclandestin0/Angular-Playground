// Angular import
import { Component, OnInit, Input } from '@angular/core';

// Internal import
import { Human } from '../human';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit {
  @Input() human: Human;
  constructor() {}

  ngOnInit() {}
}
