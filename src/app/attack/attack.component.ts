import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss']
})
export class AttackComponent implements OnInit {

  @Input() attack = 0;

  gavelWidth = 0;

  constructor() { 
    
  }

  ngOnInit() {
    this.gavelWidth = this.attack / 6 * 100 / 5;
  }

}
