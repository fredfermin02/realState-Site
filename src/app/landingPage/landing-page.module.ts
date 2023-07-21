import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { StatsComponent } from './components/stats-component/stats-component.component';
import { HousesCarouselComponent } from './components/houses-carousel/houses-carousel.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdvantagesComponent } from './components/advantages/advantages.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    LandingPageComponent,
    StatsComponent,
    HousesCarouselComponent,
    AdvantagesComponent,
    TeamComponent,
    ContactComponent,



  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    
  ]
})
export class LandingPageModule { }
