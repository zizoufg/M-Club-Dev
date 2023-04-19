import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    users:any =[];
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
    


