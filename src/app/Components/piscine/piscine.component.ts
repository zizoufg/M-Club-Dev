import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piscine',
  templateUrl: './piscine.component.html',
  styleUrls: ['./piscine.component.css']
})
export class PiscineComponent implements OnInit {
  piscineTab:any=[];
  constructor() { }

  ngOnInit(): void {
    const Background = document.getElementById("body");
    Background!.style.background ="#f4f4f4";




    const triggerElement = document.getElementById("trigger");
    const targetElement = document.getElementById("target2");

let originalDisplayValue = targetElement!.style.display;

triggerElement!.addEventListener("mouseover", () => {
  targetElement!.style.transition = "opacity 0.5s";
  targetElement!.style.opacity = "0.075";
 
  
 
});

triggerElement!.addEventListener("mouseout", () => {
  targetElement!.style.display = originalDisplayValue;
  targetElement!.style.opacity = "1";
});


//////////////////////////piscineTab///////////////////////////////////
this.piscineTab =[
  {image:"/assets/Piscine/aquagym.jpg",name:"Aquagym",description:"L’aquagym est un sport complet qui fait travailler de nombreux muscles. Il est un excellent moyen d’allier l’aspect détente/plaisir de la piscine et les bienfaits d’une activité sportive"},
  {image:"/assets/Piscine/pool-academy-kids.png",name:"Pool academy",description:"M CLUB organise des sessions académiques pour les enfants à partir de 4 ans (4 niveaux d'entraînement ; familiarisation, initiation, apprentissage et perfectionnement).L’objectif final est d'apprendre aux enfants les quatre nages: dos crawlé, brasse, crawl et papillon."},
  {image:"/assets/Piscine/4 apprentissages.jpg",name:"4 Apprentissages",description:"apprentissage des 4 nages : La brasse , le crawl, Papillon, le dos, le dos crawlé."},
  {image:"/assets/Piscine/nage libre.png",name:"Nage Libre ",description:"Nage Libre : M CLUB programme quelques heures pour la nage libre : les adhérents pourront s’amuser et nager librement."},
  {image:"/assets/Piscine/aquabike.min.jpg",name:"Aquabike",description:" Aquabike : L'aquabike  se pratique sur un vélo dédié, installé en piscine. Il est un sport complet qui fait travailler en douceur toute la partie inférieure du corps. Idéal pour le cardio, il permet en plus de sculpter et d’affiner la silhouette"},

  
];
  }

}
