import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe-card',
  templateUrl: './equipe-card.component.html',
  styleUrls: ['./equipe-card.component.css']
})
export class EquipeCardComponent implements OnInit {
  @Input() equipeInput:any;
  constructor() { }

  ngOnInit(): void {
    
  }
  

}
