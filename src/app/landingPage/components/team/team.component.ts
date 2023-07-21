import { Component  } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  animations: [
    trigger('expandAnimation', [
      state(
        'collapsed',
        style({ height: '0', opacity: 0, overflow: 'hidden' })
      ),
      state(
        'expanded',
        style({ height: '*', opacity: 1, overflow: 'hidden' })
      ),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class TeamComponent {

  activeIndex: number | null = null;

  setActiveIndex(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  accordionItems = [
    { title: 'Tab 1', content: 'Content for Tab 1' },
    { title: 'Tab 2', content: 'Content for Tab 2' },
    { title: 'Tab 3', content: 'Content for Tab 3' }
  ];
}
