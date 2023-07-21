import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

import { LandingPageModule } from './landingPage/landing-page.module';

import { FooterComponent } from './shared/footer/footer.component';
import { CatalogComponent } from './catalog/catalog.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LayoutPageComponent,
    NavBarComponent,
    FooterComponent,
    CatalogComponent,
    TruncatePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    HttpClientModule
    
  ],
  
  exports:[
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
