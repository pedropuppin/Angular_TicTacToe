import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { BoardComponent } from './components/board/board.component';
import { SquareComponent } from './components/square/square.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    GamePageComponent,
    BoardComponent,
    SquareComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],

})
export class GameModule { }
