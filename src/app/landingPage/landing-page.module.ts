import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { StatsComponent } from './components/stats-component/stats-component.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class LandingPageModule { }
