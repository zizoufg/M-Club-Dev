import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nos-services',
  templateUrl: './nos-services.component.html',
  styleUrls: ['./nos-services.component.css']
})
export class NosServicesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  GoToBuvette(){
    this.router.navigate(['buvette']);
  }
  GoToPiscine(){
    this.router.navigate(['piscine']);
  }
  GoToHammem(){
    this.router.navigate(['hammem']);
  }
  GoToGym(){
    this.router.navigate(['gym']);
  }

}


