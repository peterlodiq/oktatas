import { Injectable } from '@angular/core';
import { Monster } from './monster';
import { MONSTERS } from './mock-monsters';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  constructor() { }

  getMonsters(): Observable<Monster[]> {
    return of(MONSTERS);
  }

  getMonster(id: number): Observable<Monster> {
    return of(MONSTERS.find(monster => monster.id === id));
  }
}
