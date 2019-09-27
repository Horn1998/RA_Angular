import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public array = [1, 2, 3, 4];
  image ={
    1:"assets/img/1.jpg",
    2:"assets/img/2.jpg",
    3:"assets/img/3.jpg",
    4:"assets/img/4.jpg",
    5:"assets/img/5.jpg",
    6:"assets/img/6.jpg",
    7:"assets/img/7.jpg",
  }

  constructor() { }

  ngOnInit() {
  }

}
