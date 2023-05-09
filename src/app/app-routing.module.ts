import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { GamePageComponent } from './features/game/pages/game-page/game-page.component';
import { LoginComponent } from './features/login/pages/login/login.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'game', component: GamePageComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
