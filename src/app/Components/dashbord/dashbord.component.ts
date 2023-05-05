import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import * as  $ from "jquery";
import { NavigationEnd, Router } from '@angular/router';
import { CoachDashboardComponent } from '../coach-dashboard/coach-dashboard.component';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  @ViewChild(CoachDashboardComponent) childComponent: CoachDashboardComponent | undefined 
  user:any;
  
  constructor(private authGuard:AuthGuard, private  router:Router) { }
  sideBarOpen = true;
  ShowCoach = false;
  ShowClients = false;
  ShowAdherent = false ;
  
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

    


    



    const equipe = document.getElementById("equipe");
    const client = document.getElementById("client");
    const adherent = document.getElementById("adhérent");
    const dashboardMain = document.getElementById("dashboardMain");
    ///////////////////////DashboradMainButton////////////////
    const dashboardMainButton = document.getElementById("dashboardMainButton");
    dashboardMainButton?.addEventListener("click",()=>{
      if(dashboardMain?.classList.contains("hide")){
        dashboardMain.classList.remove("hide");
        if(!client?.classList.contains("hide"))
          client?.classList.add("hide");
        if(!adherent?.classList.contains("hide"))
          adherent?.classList.add("hide");
          if(!equipe?.classList.contains("hide"))
          equipe?.classList.add("hide");

      }
      
    })

   ////////////////////////EquipeButton////////////////////////// 
    const equipeButton = document.getElementById("equipeButton");
    equipeButton?.addEventListener("click",()=>{
      if(equipe?.classList.contains("hide")){
        equipe.classList.remove("hide");
        if(!client?.classList.contains("hide"))
        client?.classList.add("hide");
        if(!adherent?.classList.contains("hide"))
          adherent?.classList.add("hide");
          if(!dashboardMain?.classList.contains("hide"))
          dashboardMain?.classList.add("hide");

      }
      
    })
////////////////ClientButton////////////////////
    const clientButton =  document.getElementById("clientButton"); 
    clientButton?.addEventListener("click",()=>{
      if(client?.classList.contains("hide")){
        client.classList.remove("hide");
        if(!equipe?.classList.contains("hide"))
        equipe?.classList.add("hide");
        if(!adherent?.classList.contains("hide"))
          adherent?.classList.add("hide");
          if(!dashboardMain?.classList.contains("hide"))
          dashboardMain?.classList.add("hide");

      }
    

    })
    /////////////////AdherentButton/////////////////////////
    const adherentButton = document.getElementById("adherentButton"); 
    adherentButton?.addEventListener("click",()=>{
      if(adherent?.classList.contains("hide")){
        adherent.classList.remove("hide");
        if(!equipe?.classList.contains("hide"))
        equipe?.classList.add("hide");
        if(!client?.classList.contains("hide"))
          client?.classList.add("hide");
          if(!dashboardMain?.classList.contains("hide"))
          dashboardMain?.classList.add("hide");

      }
     

    })

  }

  reload(){
    location.reload;
  }
  }
  


