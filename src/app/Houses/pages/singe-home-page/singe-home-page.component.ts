import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singe-home-page',
  templateUrl: './singe-home-page.component.html',
  styleUrls: ['./singe-home-page.component.css']
})
export class SingeHomePageComponent implements OnInit {

  public stats = [
    {
      stat: 12,
      phrase: 'HOLA'
    },
    {
      stat: 13,
      phrase: 'COMO'
    },
    {
      stat: 12,
      phrase: 'Estas'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
