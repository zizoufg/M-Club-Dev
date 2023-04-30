import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toArray } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients-dashboard',
  templateUrl: './clients-dashboard.component.html',
  styleUrls: ['./clients-dashboard.component.css']
})
export class ClientsDashboardComponent implements OnInit {
  clientsTab:any=[];
  constructor(private router:Router, private ClientService:ClientService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ClientService.getAllClients().pipe(
      toArray()
    ).subscribe((data: any[]) => {
      this.clientsTab = data;
      this.clientsTab = this.clientsTab[0].clients;
      
      console.log(this.clientsTab);
    });
  }

}
