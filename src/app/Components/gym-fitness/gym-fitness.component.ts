import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gym-fitness',
  templateUrl: './gym-fitness.component.html',
  styleUrls: ['./gym-fitness.component.css']
})
export class GymFitnessComponent implements OnInit {
  seniorTab:any =[];
  kidsTab:any=[];
  constructor() { }

  ngOnInit(): void {
    const Background = document.getElementById("body");
    Background!.style.background ="#f4f4f4";




    const triggerElement = document.getElementById("trigger");
    const targetElement = document.getElementById("target1");

let originalDisplayValue = targetElement!.style.display;

triggerElement!.addEventListener("mouseover", () => {
  targetElement!.style.transition = "opacity 0.5s";
  targetElement!.style.opacity = "0.075";
 
  
 
});

triggerElement!.addEventListener("mouseout", () => {
  targetElement!.style.display = originalDisplayValue;
  targetElement!.style.opacity = "1";
});

//////////////////////////////////////seniorTab////////////////////////////////////////:
this.seniorTab =[
  {image:"/assets/Gym&Fitness/yoga.jpg",name:"Yoga",description:"Le yoga est la pratique d'un ensemble de postures et d'exercices de respiration qui vise à apporter un bien-être physique et mental"},
  {image:"/assets/Gym&Fitness/cardio-hit.jpg",name:"Cardio Hiit",description:"Le HIIT est une méthode d’entraînement qui consiste à alterner des périodes courtes d’effort intenses avec des temps de récupération également très brefs"},
  {image:"/assets/Gym&Fitness/Gym-ball.jpg",name:"Gym Ball",description:"Un gros ballon de fitness qui s’utilise pour le renforcement des muscles profonds. Il muscle la sangle abdominale, tonifie la silhouette et soulage les maux de dos"},
  {image:"/assets/Gym&Fitness/Parcours-minceur.jpg",name:"Parcours Minceur",description:"Le parcours minceur est un cours de fitness construit autour d'ateliers cardio et de renforcement musculaire. Son objectif consiste à bruler les graisses et à modeler la silhouette"},
  {image:"/assets/Gym&Fitness/AfroDance.jpg",name:"Afro Danse",description:"L’Afro dance est un cours cardio basé sur les sonorités africaines. C’est une danse qui peut être à la fois fluide et explosive, avec un accent mis sur les changements de rythmes"},
  {image:"/assets/Gym&Fitness/Gym-prénatal.jpg",name:"Gym Prénatal",description:"La gymnastique prénatale propose des exercices de respiration et de relaxation pour vous préparer à l’accouchement."},
  {image:"/assets/Gym&Fitness/Pilate.jpg",name:"Pilates",description:"Le pilates est une méthode d'entraînement physique qui s'inspire du yoga, de la danse et de la gymnastique. Elle se pratique au sol, sur un tapis, ou à l'aide d'appareils."},
  {image:"/assets/Gym&Fitness/circuit-hiit.jpg",name:"Circuit Hiit",description:"Le HIIT est une méthode d’entraînement qui consiste à alterner des périodes courtes d’effort intenses avec des temps de récupération également très brefs.Il demande plus d'effort que le cardio Hiit"},
  {image:"/assets/Gym&Fitness/Workout.jpg",name:"Workout Femme",description:"Ce cours de renforcement musculaire très intense a été spécialement conçu pour sculpter la silhouette en un minimum de temps"},
  {image:"/assets/Gym&Fitness/hiit-step.jpg",name:"Cardio Hiit Step",description:"Le Cardio Hiit Step est une méthode qui consiste, comme son nom l’indique, à travailler sur l’ensemble des chaînes musculaires au cours d’un seul entraînement."},
  {image:"/assets/Gym&Fitness/zumba.jpg",name:"Cardio Zumba",description:"La zumba, c'est la cardio mixée à la danse latine. Les chorégraphies sont rythmées et intenses mais font ressemblent bien plus à des danses qu'à des exercices musculaires"},
  {image:"/assets/Gym&Fitness/group-boxing.jpg",name:"Art Martiaux",description:"Kick Boxing : Sport de combat qui se pratique avec les poings et les pieds et Self Defence : la maîtrise de techniques de combat permettant de faire face à une agression physique"},
  {image:"/assets/Gym&Fitness/Volleyball.jpg",name:"Volley-Ball",description:"Sport cllectif. Pour les joueurs d'une équipe, à faire franchir le filet au ballon en le reprenant de volée et à la main, sans le laisser rebondir, de telle sorte que l'équipe adverse ne puisse pas le renvoyer."},
  {image:"/assets/Gym&Fitness/basket.jpg",name:"Basket-Ball",description:"Le basketball est un sport collectif . Les joueurs essaie de lancer le ballon dans un panier suspendu à 3,05 m du sol, ce sport demande une grande débauche d’énergie."},
  {image:"/assets/Gym&Fitness/full-body-sculpt.jpg",name:"Full Body Sculpt",description:"le Full Body Sculpt est une discipline fitness qui allie renforcement musculaire et cardiotraining ciblant toutes les parties du corps."}
]

////////////////////////////////////////////////////kidsTab///////////////////////////////////////////////////////


this.kidsTab =[
  {image:"/assets/Gym&Fitness/Kids/natation.png",name:"Natation",description:"Natation  : M CLUB organise des sessions académiques pour apprendre à nager aux enfants"},
  {image:"/assets/Gym&Fitness/Kids/danse.png",name:"Club Danse",description:"Les enfants qui pratiquent la danse ont un meilleur développement aussi bien sur le plan physique qu'intellectuel, émotionnel et relationnel"},
  {image:"/assets/Gym&Fitness/Kids/psych.png",name:"Psychomotricité",description:"a psychomotricité regroupe des fonctions motrices qui sont en lien direct ou indirect avec la pensée, la psychologie et les fonctions cérébrales"},
  {image:"/assets/Gym&Fitness/Kids/karate.jpg",name:"Karaté",description:"Le karaté permet l'épanouissement du corps et de l'esprit, la valorisation de soi dans l'action, apporte la souplesse, l'équilibre et le plaisir"},
  {image:"/assets/Gym&Fitness/Kids/arts.png",name:"Art Plastique",description:"Ils permettent aux enfants de mettre en oeuvre et de donner du sens aux acquis scolaires tout en développant leur imagination, leur sensibilité et leur part de rêve"},
  {image:"/assets/Gym&Fitness/Kids/gym.png",name:"Gymnastique",description:"La gymnastique prénatale propose des exercices de respiration et de relaxation pour vous préparer à l’accouchement."},
  {image:"/assets/Gym&Fitness/Kids/self.png",name:"Self Défence",description:"La self-défense enfant est une activité ludique, utile et complète où les plus jeunes apprendront à dépasser leurs appréhensions, à se dépasser et pendront confiance en eux en travaillant leur corps et leur mental"},
  {image:"/assets/Gym&Fitness/Kids/Volley.jpg",name:"Volley-Ball",description:"Sport collectif. Pour les joueurs d'une équipe, à faire franchir le filet au ballon en le reprenant de volée et à la main, sans le laisser rebondir, de telle sorte que l'équipe adverse ne puisse pas le renvoyer."},
  {image:"/assets/Gym&Fitness/Kids/basketball.jpg",name:"Basket-Ball",description:"Le basketball est un sport collectif . Les joueurs essaie de lancer le ballon dans un panier suspendu à 3,05 m du sol, ce sport demande une grande débauche d’énergie."}

]

  }

}
