import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay: Element) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val") || "0", 10);
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 1;
    valueDisplay.textContent = startValue.toString();
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});
    
  }

}
