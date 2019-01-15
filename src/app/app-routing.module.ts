import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonstersComponent } from './monsters/monsters.component';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/monsters', pathMatch: 'full' },
  { path: 'monsters', component: MonstersComponent },
  { path: 'detail/:id', component: MonsterDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
