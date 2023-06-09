import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toArray } from 'rxjs';
import { AdherentService } from 'src/app/services/adherent.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients-dashboard',
  templateUrl: './clients-dashboard.component.html',
  styleUrls: ['./clients-dashboard.component.css']
})
export class ClientsDashboardComponent implements OnInit {
  clientsTab:any=[];
  Client:any=[];
  constructor(private router:Router, private ClientService:ClientService, private activatedRoute:ActivatedRoute, private AdherentService:AdherentService) { }

  ngOnInit(): void {
    this.ClientService.getAllClients().pipe(
      toArray()
    ).subscribe((data: any[]) => {
      this.clientsTab = data;
      this.clientsTab = this.clientsTab[0].clients;
      
    
    });


    //button paiement//////////////
   
   
    
  }
  async changeStatus(id:any){
    interface ClientDocument {
      _id: string;
      name: string;
      email: string;
      tel: string;
      abonnement:string;
      duree: string;
      
    }
    
    interface AdherentDocument {
      _id: string;
      name: string;
      email: string;
      tel: string;
      abonnement:string;
      duree: string;
     
    }
    
    const buttons = document.querySelectorAll("td button");

buttons.forEach((button) => {
  button.addEventListener("mousedown",async  (event) => {
    event.preventDefault();
    if (button.classList.contains("active")) {
      button.classList.remove("active");
      button.innerHTML = " Non Payé";
      
    } else {
      button.classList.add("active");
      button.innerHTML = " Payé";
      const documentToCopy:any = await  this.ClientService.getClientById(id).toPromise();
      
      const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
  const day = String(currentDate.getDate()).padStart(2, '0'); 
  const date:any = `${day}/${month}/${year}`;
      
      documentToCopy.client.date =date ;
      
      
      console.log(documentToCopy);
      
     await this.AdherentService.addAdherent(documentToCopy.client as unknown as AdherentDocument).toPromise();
     
     await this.ClientService.deleteClientById(id).toPromise();
    this.clientsTab = await this.ClientService.getAllClients().toPromise();
    
    setTimeout(
      function open(event){
         location.reload();
      },
      2000
  )
    }
  });
});

  }

}
