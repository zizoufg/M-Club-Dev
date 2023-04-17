import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
//////////////////////////animation piscine //////////////////////////////////////





    const x = document.getElementById("body");
    x!.style.background =" url(/assets/Plan/Fitness.png)";
    x!.style.backgroundSize="cover";
    const tabs = document.querySelectorAll<HTMLLIElement>(".tabs_wrap ul li");
const lundi = document.querySelectorAll<HTMLElement>(".lundi");
const mardi = document.querySelectorAll<HTMLElement>(".mardi");
const mercredi = document.querySelectorAll<HTMLElement>(".mercredi");
const jeudi = document.querySelectorAll<HTMLElement>(".jeudi");
const vendredi = document.querySelectorAll<HTMLElement>(".vendredi");
const samedi = document.querySelectorAll<HTMLElement>(".samedi");
const dimanche = document.querySelectorAll<HTMLElement>(".dimanche");
const all = document.querySelectorAll<HTMLElement>(".item_wrap");

tabs.forEach((tab: HTMLLIElement) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab: HTMLLIElement) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    const tabval = tab.getAttribute("data-tabs");

    all.forEach((item: HTMLElement) => {
      item.style.display = "none";
    });

    if (tabval === "lundi") {
      lundi.forEach((lundi: HTMLElement) => {
        lundi.style.display = "block";
      });
    } else if (tabval === "mardi") {
      mardi.forEach((mardi: HTMLElement) => {
        mardi.style.display = "block";
      });
    } else if (tabval === "mercredi") {
      mercredi.forEach((mercredi: HTMLElement) => {
        mercredi.style.display = "block";
      });
    } else if (tabval === "jeudi") {
      jeudi.forEach((jeudi: HTMLElement) => {
        jeudi.style.display = "block";
      });
    } else if (tabval === "vendredi") {
      vendredi.forEach((vendredi: HTMLElement) => {
        vendredi.style.display = "block";
      });
    } else if (tabval === "samedi") {
      samedi.forEach((samedi: HTMLElement) => {
        samedi.style.display = "block";
      });
    } else if (tabval === "dimanche") {
      dimanche.forEach((dimanche: HTMLElement) => {
        dimanche.style.display = "block";
      });
    }
  });
});

  }

}
