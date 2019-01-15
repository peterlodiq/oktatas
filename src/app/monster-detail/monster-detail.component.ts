import { Component, OnInit, Input } from '@angular/core';
import { Monster } from '../monster';
import { MonsterService } from '../monster.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.scss']
})
export class MonsterDetailComponent implements OnInit {

  @Input() monster: Monster;

  constructor(
    private route: ActivatedRoute,
    private monsterService: MonsterService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMonster();
  }

  getMonster(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.monsterService
        .getMonster(id)
        .subscribe(monster => this.monster = monster);
  }

  goBack(): void {
    this.location.back();
  }
}
