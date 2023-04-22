import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
   EquipeTab:any = [];
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



/////////////////////////////////////////////EQUIPETAB/////////////////////////////////////////////////////
this.EquipeTab =[
  {image:"/assets/trainer-1.jpg",name:"Skander Trigui",profession:"Cardio Hit",tel:"+216 44 140 620"},
  {image:"/assets/trainer-2.jpg",name:"Ayman Bejaoui",profession:"Cardio Hit",tel:"+216 44 140 620"},
  {image:"/assets/trainer-3.jpg",name:"Hamouda Bouattour",profession:"Cardio Hit",tel:"+216 44 140 620"},
  {image:"/assets/trainer-1.jpg",name:"Aziz Mrabet",profession:"Cardio Hit",tel:"+216 44 140 620"},
  {image:"/assets/trainer-2.jpg",name:"Achraf Bejaoui",profession:"Cardio Hit",tel:"+216 44 140 620"},
  {image:"/assets/trainer-3.jpg",name:"Heni Walha",profession:"Cardio Hit",tel:"+216 44 140 620"}
];
  }

  

  

}
