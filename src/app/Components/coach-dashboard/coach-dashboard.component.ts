import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EquipeService } from 'src/app/services/equipe.service';
import { toArray } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-coach-dashboard',
  templateUrl: './coach-dashboard.component.html',
  styleUrls: ['./coach-dashboard.component.css']
})
export class CoachDashboardComponent implements OnInit {
  equipes:any =[];
  coach:any ={};
  SelectedId:any;
  
  
  
  @Input() variable:any ;
  constructor(private router:Router, private EquipeService:EquipeService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.EquipeService.getAllEquipes() .pipe(
      toArray()
    ).subscribe((data: any[]) => {
      this.equipes = data;
      this.equipes = this.equipes[0].equipes;
    });

    


    



    ///////////////////////Upload image ////////////////////////////////////
    const btnUpload:any = $("#upload_file"),
    btnOuter = $(".button_outer");
btnUpload.on("change", function(e:any){
    var ext = btnUpload.val().split('.').pop().toLowerCase();
    if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
        $(".error_msg").text("Not an Image...");
    } else {
        $(".error_msg").text("");
        btnOuter.addClass("file_uploading");
        setTimeout(function(){
            btnOuter.addClass("file_uploaded");
        },3000);
        var uploadedFile = URL.createObjectURL(e.target.files[0]);
        setTimeout(function(){
            $("#uploaded_view").append('<img width="55%" src="'+uploadedFile+'" />').addClass("show");
        },3500);
    }
});
$(".file_remove").on("click", function(e){
    $("#uploaded_view").removeClass("show");
    $("#uploaded_view").find("img").remove();
    btnOuter.removeClass("file_uploading");
    btnOuter.removeClass("file_uploaded");
});

  }




  async AddCoach(){
    const name:any = document.getElementById("Nom");
    const specialité:any = document.getElementById("Spécialité");
    const Tel:any = document.getElementById("Tel");
    //values:
     const nameVal:String  = name.value ;
     const specialitéVal:String = specialité.value;
     const TelVal:String = Tel.value;
   //Request
    const Req:any = {name:nameVal,profession:specialitéVal ,tel:TelVal };
    
     this.EquipeService.addEquipe(Req).subscribe(  (equipe) => {
      console.log(`Equipe added: ${equipe}`);
      
      
      location.reload();
      
      
      
      

     
      
      
      
      
    });
    

    
    this.variable = true;
    

  };
  deleteCoach(id: string){
    document.querySelector<HTMLElement>(".popup2")!.style.display = "block";
    const continuer = document.getElementById("continuer2");
    continuer?.addEventListener("click",()=>{
      this.EquipeService.deleteEquipeById(id).subscribe(()=>{
        location.reload();
        this.EquipeService.getAllEquipes();
        
      });
     
  
    })
    const fermer = document.getElementById("fermer2");
    fermer?.addEventListener("click",()=>{
      document.querySelector<HTMLElement>(".popup2")!.style.display = "none";
    })
   
    
  }
  editCoach( id:any ){
    
    const ModifierNom:any= document.getElementById("ModifierNom");
    const ModifierSpecialite:any= document.getElementById("ModifierSpecialite");
    const ModifierTel:any= document.getElementById("ModifierTel");

    const ModifierNomVal:String =ModifierNom.value;
    const ModifierSpecialiteVal:String = ModifierSpecialite.value;
    const ModifierTelVal:String = ModifierTel.value;
    this.coach = {name: ModifierNomVal, profession:ModifierSpecialiteVal, tel :ModifierTelVal };
    console.log(this.coach);
    this.EquipeService.editEquipe(this.coach,this.SelectedId).subscribe(()=>{
      location.reload();
      this.EquipeService.getAllEquipes();
      

      
     
    });

  }
  sendData(id: any){
    // localStorage.setItem("ID",id);
    this.SelectedId = id ;
  }

}
