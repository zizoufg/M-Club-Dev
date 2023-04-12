import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const body = document.getElementById("body");
    body!.style.background ="#f4f4f4";
    const triggerElement = document.getElementById("trigger");
    const targetElement = document.getElementById("target");

let originalDisplayValue = targetElement!.style.display;

triggerElement!.addEventListener("mouseover", () => {
  targetElement!.style.transition = "opacity 0.5s";
  targetElement!.style.opacity = "0.075";
  
  
 
});

triggerElement!.addEventListener("mouseout", () => {
  targetElement!.style.display = originalDisplayValue;
  targetElement!.style.opacity = "1";
});
  }

}
