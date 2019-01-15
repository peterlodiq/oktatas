import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-defense',
  templateUrl: './defense.component.html',
  styleUrls: ['./defense.component.scss']
})
export class DefenseComponent implements OnInit {

  @Input() defense = 0;

  shieldWidth = 0;

  constructor() { }

  ngOnInit() {
    this.shieldWidth = this.defense / 6 * 100 / 5;
  }

}
