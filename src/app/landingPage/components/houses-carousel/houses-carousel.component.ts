import { Component } from '@angular/core';



@Component({
  selector: 'app-houses-carousel',
  templateUrl: './houses-carousel.component.html',
  styleUrls: ['./houses-carousel.component.css']
})
export class HousesCarouselComponent {
  public houses = [
    {
      titulo: 'Cozy house infront of the sea',
      type: 'House',
      Price: 86000,
      rooms: 3,
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur vel lorem a suscipit. Aenean vitae gravida nisi. Nullam tempus mollis sapien. Nulla quis lacus vitae justo pretium vestibulum.',
      img: '3.jpg'
    },
    {
      titulo: 'Crazy penthouse in the heart of new york city',
      type: 'Aprtment',
      Price: 300000,
      rooms: 3,
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur vel lorem a suscipit. Aenean vitae gravida nisi. Nullam tempus mollis sapien. Nulla quis lacus vitae justo pretium vestibulum.',
      img: '2.jpg'

    },
    {
      titulo: 'Luxurious house in coast line side of miami beach',
      type: 'House',
      Price: 1600000,
      rooms: 3,
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur vel lorem a suscipit. Aenean vitae gravida nisi. Nullam tempus mollis sapien. Nulla quis lacus vitae justo pretium vestibulum.',
      img: '1.jpg'
    }
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
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}
}
