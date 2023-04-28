import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import * as  $ from "jquery";
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  user:any;
  constructor(private authGuard:AuthGuard, private  router:Router) { }
  sideBarOpen = true;
  ShowCoach = false;
  ShowClients = false;

  ngOnInit(): void {
    const x = document.getElementById("body");
    x!.style.background ="none";
    x!.style.margin ="0px";
    x!.style.padding= " 0px";
    x!.style.backgroundColor= "#1b203d";
    x!.style.overflow="hidden";
    x!.style.fontFamily = "Montserrat";


    $(".nav").click(() => {
      $("#mySidenav").css("width", "70px");
      $("#main").css("margin-left", "70px");
      $(".logo").css("visibility", "hidden");
      $(".logo span").css("visibility", "visible");
      $(".logo span").css("margin-left", "-10px");
      $(".icon-a").css("visibility", "hidden");
      $(".icons").css("visibility", "visible");
      $(".icons").css("margin-left", "-8px");

      
      $(".nav").css("display", "none");
      $(".nav2").css("display", "block");
    });
    
    $(".nav2").click(() => {
      $("#mySidenav").css("width", "300px");
      $("#main").css("margin-left", "300px");
      $(".logo").css("visibility", "visible");
      $(".icon-a").css("visibility", "visible");
      $(".icons").css("visibility", "visible");
      $(".nav").css("display", "block");
      $(".nav2").css("display", "none");
    });




    ///routing to tables 

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/coach-dashboard') {
          this.ShowCoach = true;
          
          
        } 
        if (event.url === '/clients-dashboard') {
          this.ShowClients = true;
          
          
          
        } 
        
        // else {
          
        //   this.ShowCoach = false;
        // }
      }
    });
  }

  reload(){
    location.reload;
  }
  }
  // sideBarToggler() {
  //   this.sideBarOpen = !this.sideBarOpen;
  // }
  


