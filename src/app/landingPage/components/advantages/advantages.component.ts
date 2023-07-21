import { Component } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})
export class AdvantagesComponent {
  public advantages = [
    {
      icon: 'fa-brands fa-gratipay fa-2xl',
      title: 'Trust & Transparency',
      body: 'loren ipsum',
      index: 1
    },
    {
      icon: 'fa-solid fa-clock fa-2xl',
      title: 'Efficiency',
      body: 'loren ipsum',
      index: 2
    },
    {
      icon: 'fa-solid fa-user-tie fa-2xl',
      title: 'Professionalism',
      body: 'loren ipsum',
      index: 3
    },
    {
      icon: 'fa-solid fa-suitcase fa-2xl',
      title: 'Experience',
      body: 'loren ipsum',
      index: 4
    },
    
  ]

  responsiveOptions;
  
  constructor() {
    this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
}
}
