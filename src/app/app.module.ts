import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonstersComponent } from './monsters/monsters.component';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';
import { AttackComponent } from './attack/attack.component';
import { DefenseComponent } from './defense/defense.component';
import { HealthComponent } from './health/health.component';

@NgModule({
  declarations: [
    AppComponent,
    MonstersComponent,
    MonsterDetailComponent,
    AttackComponent,
    DefenseComponent,
    HealthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
