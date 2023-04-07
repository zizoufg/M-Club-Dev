import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const x  = document.getElementById("body");
    x!.style.background ="url(/assets/final.png)";
    x!.style.backgroundRepeat ="no-repeat";
    x!.style.backgroundSize ="cover";

    
    

    const up = document.querySelector<HTMLElement>('.up');
window.onscroll = () => {
  up!.classList.toggle('show', window.scrollY >= 1000);
};
up!.onclick = () => {
  window.scrollTo({ behavior: 'smooth', top: 0 });
};





  
   
  }

}
