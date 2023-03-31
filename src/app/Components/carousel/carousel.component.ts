import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
 
  constructor() { 
   
  }
  

  ngOnInit(): void {
    let counter: number = 1;
    

setInterval(() => {
  const radio = document.getElementById(`radio${counter}`) as HTMLInputElement;
  if (radio) {
    radio.checked = true;
  }
  counter++;
  if (counter != 1) 
      document.getElementById("first-radio")!.style.backgroundColor ="transparent" ; 
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

    

}
}
