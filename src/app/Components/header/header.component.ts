import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    window.addEventListener("scroll",function(){
      var header = document.getElementById("myNavbar");
      header!.classList.toggle("sticky",window.scrollY>0);
  })


  
  }
  GoToLogin(){
    this.router.navigate(['login']);

  }

}

