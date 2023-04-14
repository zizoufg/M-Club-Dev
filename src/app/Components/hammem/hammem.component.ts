import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hammem',
  templateUrl: './hammem.component.html',
  styleUrls: ['./hammem.component.css']
})
export class HammemComponent implements OnInit {
  hammemTab:any=[];
  constructor() { }

  ngOnInit(): void {
    const Background = document.getElementById("body");
    Background!.style.background ="#f4f4f4";




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


/////////////////////hammemTab/////////////////
this.hammemTab=[
  {image:"/assets/Hammem&Spa/hammem.png",name:"Hammem",description:"Hammem : Le hammam est un rituel bien-être particulièrement recommandé pour le soin de la peau grâce à sa chaleur. "},
  {image:"/assets/Hammem&Spa/spa.png",name:"Spa",description:" De différents services seront disponibles pour vous tel que massage, esthétique (épilation et soins...), onglerie (vernis permanent et gel...), coiffure (coupe, brushing, coloration, protéine...)."}
]

  }

}
