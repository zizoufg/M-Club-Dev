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
  this.AdherentService.deleteAdherentById(id).subscribe(()=>{
    this.AdherentService.getAllAdherents();
  });;
}
sendData(id:any){
  this.SelectedId = id ;
}
editAdherent(id:any){
  this.SelectedId = id ;
  const Name:any= document.getElementById("ModifierAdherentName");
    const Email:any = document.getElementById("ModifierAdherentEmail");
    const Tel:any = document.getElementById("ModifierAdherentTel");
    const Abonnement:any = document.getElementById("ModifierAdherentAbonnement");
    const Duree:any= document.getElementById("ModifierAdherentDuree");

    const NameVal:any = Name.value;
    const EmailVal:any = Email.value;
    const TelVal:any = Tel.value;
    const AbonnementVal:any = Abonnement.value;
    const DureeVal:any = Duree.value;
    this.adherent = {name:NameVal , email: EmailVal, tel:TelVal, abonnement:AbonnementVal, duree:DureeVal};
    console.log(this.adherent);
    this.AdherentService.editAdherent(this.adherent ,this.SelectedId).subscribe();
}
}