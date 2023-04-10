import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    {
    imgSrc: '/assets/images/photo1.jpg',
    imgAlt: 'photo 1'
    },
    {
    imgSrc: '/assets/images/photo2.jpg',
    imgAlt: 'photo 2'
    },
    {
    imgSrc: '/assets/images/photo3.jpg',
    imgAlt: 'photo 3'
    }
  ]//Declaring array for sending data to review component
}
