import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  houses = [
    {
      img:'./assets/7.jpg',
      type: 'Apartment',
      title: ' C LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM',
      Description:' C LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM',
      Price:80000,
      rooms:2,
      bathrooms:2.5,
      size:50,
      floor:4
    },
    {
      img:'./assets/7.jpg',
      type: 'Apartment',
      title: 'LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM ',
      Description:'LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM LOREN IMPSUM',
      Price:80000,
      rooms:2,
      bathrooms:3,
      size:50,
      floor:4
    }
  ]

}
