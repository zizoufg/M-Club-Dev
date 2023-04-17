import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    users:any =[];
  constructor() { }

  ngOnInit(): void {
    window.addEventListener("scroll",function(){
      var header = document.getElementById("myNavbar");
      header!.classList.toggle("sticky",window.scrollY>0);
  })
    
  }
    
}
    


