import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buvette',
  templateUrl: './buvette.component.html',
  styleUrls: ['./buvette.component.css']
})
export class BuvetteComponent implements OnInit {
  buvetteTab:any=[];
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


////////////////////buvetteTab/////////////////////////
this.buvetteTab =[
  {image:"/assets/Buvette/boissons.png",name:"Boissons",description:"M CLUB met à votre disposition une buvette avec des boissons rafraîchissantes"},
  {image:"/assets/Buvette/pt-dej.png",name:"Petit-Déjeuner",description:"M CLUB met à votre disposition une buvette avec un petit-déjeuner sain"},
  {image:"/assets/Buvette/patisserie.png",name:"Pâtisserie",description:"M CLUB met à votre disposition une buvette avec une pâtisserie fine"},
  {image:"/assets/Buvette/dejeuner.png",name:"Déjeuner",description:"M CLUB met à votre disposition une buvette avec un déjeuner équilibré"},
]
  }

}
