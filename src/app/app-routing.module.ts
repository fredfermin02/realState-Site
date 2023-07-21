import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landingPage/pages/landing-page/landing-page.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AuthModule } from './auth/auth.module';
import { isNotAuthenticatedGuard } from './auth/guards';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path:'catalog',
    component:CatalogComponent
  },
  {
    path:'auth',
    canActivate:[],
    loadChildren: ()=>import('./auth/auth.module').then(m=>AuthModule)
  },
  {
    path:'dashboard',
    loadChildren: ()=>import('./dashboard/dashboard.module').then(m=>DashboardModule)
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
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
