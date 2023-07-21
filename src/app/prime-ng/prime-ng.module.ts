import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardModule} from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    
  ],
  exports:[
    CardModule,
    ButtonModule,
    CarouselModule,
    ButtonModule,
    ImageModule,
    AccordionModule,
    InputTextModule,
    BrowserAnimationsModule,
    ToastModule
    

    
  ]
})
export class PrimeNgModule { }
