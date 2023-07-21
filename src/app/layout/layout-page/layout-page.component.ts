import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})

export class LayoutPageComponent implements OnInit {
  private router = inject(Router);
  
  public showFooter:boolean=true;  

  constructor() { 
    
    this.router.events.subscribe((val)=>{
      console.log(val)
      if(val instanceof NavigationEnd){
        if(val.url=='/dashboard'){
          this.showFooter=false
        }else{
          this.showFooter=true
        }
      }
    })
  }

  ngOnInit(): void {
  }

  
  
  

  

}
