import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';










@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
    const nums = document.querySelectorAll<HTMLElement>(".container .num");
    const section = document.querySelector<HTMLElement>(".triangle-box3");
    let started = false; // Function Started ? No
    
    window.onscroll = function () {
      if (window.scrollY >= section!.offsetTop) {
        if (!started) {
          nums.forEach((num) => startCount(num));
         
        }
        started = true;
        
      }
    };
    
    function startCount(el: HTMLElement) {
      let goal = Number(el.dataset['goal']);
      let count = setInterval(() => {
        el.textContent = String(Number(el.textContent) + 1);
        if (Number(el.textContent) == goal) {
          clearInterval(count);
        }
      }, 2500 / goal);
    }

    
    
    
    
    
   
   
    
  }

}
