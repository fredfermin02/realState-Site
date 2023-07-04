import { ViewportScroller } from '@angular/common';
import { AfterContentInit, Component, ElementRef, HostListener, OnInit, ViewChild, inject} from '@angular/core';


interface stat {
  digit: number;
  context: string;
  unit: string;
}

@Component({
  selector: 'stats-component',
  templateUrl: './stats-component.component.html',
  styleUrls: ['./stats-component.component.css']
})




export class StatsComponent implements AfterContentInit, OnInit {
  private scroller = inject(ViewportScroller)
   

  
  // Add an event listener to the `scroll` event of the `document` object.



  public stats: stat[] = [
    {
      digit: 5,
      context: 'Satisfied customers',
      unit:'k+'
    },
    {
      digit: 100,
      context: 'Square miles sold',
      unit:'k+'
    },
    {
      digit: 3,
      context: 'Successful transactions',
      unit:'k+'
    },
    {
      digit: 15,
      context: 'Years experience',
      unit:'+'
    }
  ];

  // @ViewChildren('number') input: any; 
  constructor() {
    
}
  ngOnInit(): void {


  }

  ngAfterContentInit(): void {
    function startCount(arreglo:stat[]) {
      arreglo.forEach((stat:stat) => {
        let goal = stat.digit;

        let contador =0;
        let count = setInterval(() => {
          (contador++);
          stat.digit = contador;
          if (contador == goal) {
            clearInterval(count);
          }
        }, 1000 / goal);
      });
  }

    let activated = false;
    let container = document.querySelector('.container') as HTMLElement;
    
    window.addEventListener('scroll',()=>{
      if (container === null) {console.log('me jodei'); return};
      if (window.scrollY > container.offsetTop - container.offsetHeight  && activated === false) {
        console.log('llegue')
        startCount(this.stats)
        activated = true;
      }
    })
  }




  
}

