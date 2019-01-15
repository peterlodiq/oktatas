import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  @Input() health = 0;

  heartWidth = 0;

  constructor() { }

  ngOnInit() {
    this.heartWidth = this.health / 6 * 100 / 5;
  }

}
