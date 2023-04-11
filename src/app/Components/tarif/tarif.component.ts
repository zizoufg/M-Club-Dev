import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const triggerElement = document.getElementById("trigger");
const targetElement = document.getElementById("target");

let originalDisplayValue = targetElement!.style.display;

triggerElement!.addEventListener("mouseover", () => {
  targetElement!.style.transition = " 0.5s";
  
  targetElement!.style.marginLeft ="15%" ;
 
});

triggerElement!.addEventListener("mouseout", () => {
  targetElement!.style.display = originalDisplayValue;
  targetElement!.style.marginLeft ="0%" ;
 
});
    
    
  
    
    
  
  
   
    
   
  }

}
