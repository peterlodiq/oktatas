import { Component, OnInit } from '@angular/core';
import { MonsterService } from '../monster.service';
import { Monster } from '../monster';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {
  constructor(private monsterService: MonsterService) { }

  ngOnInit() {
    this.getMonsters();
  }

  monsters: Monster[];
  getMonsters(): void {
    this.monsterService
        .getMonsters()
        .subscribe(monsters => this.monsters = monsters);
  }
}
