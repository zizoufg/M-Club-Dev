import { Component, OnInit } from '@angular/core';
import { toArray } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {
  notificationTab:any= [];
  constructor(private NotificationService:NotificationService) { }

  ngOnInit(): void {
    this.NotificationService.getAllNotifications().pipe(toArray()).subscribe((data:any[])=>{
      this.notificationTab = data ;
      this.notificationTab = this.notificationTab[0].notifications;
     

    })
  }
  deleteNotification(id:any){
    
          document.querySelector<HTMLElement>(".popup1")!.style.display = "block";
    
  const continuer = document.getElementById("continuer");
  continuer?.addEventListener("click",()=>{
    this.NotificationService.deleteNotificationById(id).subscribe(()=>{
      console.log(`notification ${id} deleted with success `)
      location.reload();
      
    })

  })
  const fermer = document.getElementById("fermer");
  fermer?.addEventListener("click",()=>{
    document.querySelector<HTMLElement>(".popup1")!.style.display = "none";
  })
    
  }
  async OpenMessage(id:any){
    const  notification:any = await  this.NotificationService.getNotificationById(id).toPromise();
    
    document.querySelector<HTMLElement>(".popup3")!.style.display = "block";
    document.querySelector<HTMLElement>(".popup3 p")!.innerHTML = notification.notification.message ;
    document.querySelector<HTMLElement>(".popup3 h2")!.innerHTML = notification.notification.name ;
   document.getElementById("fermer3")?.addEventListener("click",()=>{
    document.querySelector<HTMLElement>(".popup3")!.style.display = "none";
   })
    

  }


}
