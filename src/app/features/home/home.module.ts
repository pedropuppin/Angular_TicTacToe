import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule
  ],
})
export class HomeModule { }
