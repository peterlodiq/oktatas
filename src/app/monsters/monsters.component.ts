import { Component, OnInit } from '@angular/core';
import { MONSTERS } from '../mock-monsters';
import { Monster } from '../monster';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {

  monsters = MONSTERS;

  constructor() { }

  ngOnInit() {
  }

  selectedMonster: Monster;
  onSelect(monster: Monster): void {
  this.selectedMonster = monster;
}
}
