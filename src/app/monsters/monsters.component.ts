import { Component, OnInit } from '@angular/core';
import { Monster } from '../monster';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {

  monster: Monster = {
    id: 1,
    name: 'Grog',
    attack: 10,
    defense: 18,
  }

  constructor() { }

  ngOnInit() {
  }

}
