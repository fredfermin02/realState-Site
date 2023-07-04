import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landingPage/pages/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path:'houses',
    loadChildren:()=> import('./Houses/houses.module').then(m=>m.HousesModule)
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
