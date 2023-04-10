import { Component, Input, OnInit } from '@angular/core';
interface reviewImage{
  imgSrc: string;
  imgAlt: string;
}//Interface provided to get exact input format
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{
  @Input() images: reviewImage[] =[]; //Declared with interface
  @Input() indicators:boolean = true; //Indicating if dots needed or not
  @Input() controls:boolean = true; //Indicating if buttons needed or not
  selectedIndex = 0;//Default Index
  ngOnInit(): void {
  
}
selectImage(index: number){
  this.selectedIndex = index;
}
onPrevClick(): void{
  if(this.selectedIndex===0){
    this.selectedIndex = this.images.length-1;
  } else {
    this.selectedIndex--;
  }
}
onNextClick(): void{
  if(this.selectedIndex===this.images.length-1){
    this.selectedIndex === 0;
  } else {
    this.selectedIndex++;
  }
}
}
