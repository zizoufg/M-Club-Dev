import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { toArray } from 'rxjs';
import { EquipeService } from 'src/app/services/equipe.service';





@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    equipes:any =[];
    @Input() variable:any ;
  
   
  constructor(private router:Router, private EquipeService:EquipeService,) { }

  ngOnInit(): void {
    
    this.EquipeService.getAllEquipes() .pipe(
        toArray()
      ).subscribe((data: any[]) => {
        this.equipes = data;
        this.equipes = this.equipes[0].equipes;
      });



   

  



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
  AddCoach(){
    const name:any = document.getElementById("Nom");
    const specialité:any = document.getElementById("Spécialité");
    const Tel:any = document.getElementById("Tel");
    //values:
     const nameVal:String  = name.value ;
     const specialitéVal:String = specialité.value;
     const TelVal:String = Tel.value;
   //Request
    const Req:any = {name:nameVal,profession:specialitéVal ,tel:TelVal };

    this.EquipeService.addEquipe(Req).subscribe((equipe) => {
      console.log(`Equipe added: ${equipe}`);
      
    });

    
    this.variable = true;
    

  };

    

  }
  // onSubmit(){
  //   this.EquipeService.addEquipe(this.coach);

  // }




 
  
    

    


