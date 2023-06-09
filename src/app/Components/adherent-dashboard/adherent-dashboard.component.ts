import { Component, OnInit } from '@angular/core';
import { toArray } from 'rxjs';
import { AdherentService } from 'src/app/services/adherent.service';

@Component({
  selector: 'app-adherent-dashboard',
  templateUrl: './adherent-dashboard.component.html',
  styleUrls: ['./adherent-dashboard.component.css']
})
export class AdherentDashboardComponent implements OnInit {
  adherentTab:any =[];
  SelectedId: any;
  adherent:any = {};
  constructor(private AdherentService:AdherentService) { }

  ngOnInit(): void {
    this.AdherentService.getAllAdherents().pipe(
      toArray()
    ).subscribe((data: any[]) => {
      this.adherentTab = data;
      this.adherentTab = this.adherentTab[0].adherents;
    
  });

}
deleteAdherent(id:any){
  document.querySelector<HTMLElement>(".popup4")!.style.display = "block";
  const continuer = document.getElementById("continuer4");
  continuer?.addEventListener("click",()=>{
    
    this.AdherentService.deleteAdherentById(id).subscribe(()=>{
      this.AdherentService.getAllAdherents();
    });
    location.reload();

  })
  const fermer = document.getElementById("fermer4");
    fermer?.addEventListener("click",()=>{
      document.querySelector<HTMLElement>(".popup4")!.style.display = "none";
    })
 
}
async sendData(id:any){
  
  this.SelectedId = id ;
  const selectedAdherent: any = await  this.AdherentService.getAdherentById(this.SelectedId).toPromise() ;
  const Name:any= document.getElementById("ModifierAdherentName") as HTMLInputElement;
  const Email:any = document.getElementById("ModifierAdherentEmail") as HTMLInputElement;
  const Tel:any = document.getElementById("ModifierAdherentTel") as HTMLInputElement;
  const Abonnement:any = document.getElementById("ModifierAdherentAbonnement") as HTMLInputElement;
  const Date:any = document.getElementById("ModifierAdherentDate") as HTMLInputElement;
  const Duree:any= document.getElementById("ModifierAdherentDuree") as HTMLInputElement;

  Name.value =selectedAdherent.adherent.name ;
   Email.value= selectedAdherent.adherent.email;
   Tel.value=selectedAdherent.adherent.tel; 
   Abonnement.value =selectedAdherent.adherent.abonnement;
  Date.value=selectedAdherent.adherent.date;
   Duree.value=selectedAdherent.adherent.duree;
   
   
   
   
 
  
  
  

}
editAdherent(id:any){
 
  const Name:any= document.getElementById("ModifierAdherentName");
    const Email:any = document.getElementById("ModifierAdherentEmail");
    const Tel:any = document.getElementById("ModifierAdherentTel");
    const Abonnement:any = document.getElementById("ModifierAdherentAbonnement");
    const Date:any = document.getElementById("ModifierAdherentDate");
    const Duree:any= document.getElementById("ModifierAdherentDuree");

    const NameVal:any = Name.value;
    const EmailVal:any = Email.value;
    const TelVal:any = Tel.value;
    const AbonnementVal:any = Abonnement.value;
    const DateVal:any = Date.value;
    const DureeVal:any = Duree.value;
    this.adherent = {name:NameVal , email: EmailVal, tel:TelVal, abonnement:AbonnementVal,date:DateVal, duree:DureeVal};
    console.log(this.adherent);
    this.AdherentService.editAdherent(this.adherent ,id).subscribe();
    location.reload();
}
}