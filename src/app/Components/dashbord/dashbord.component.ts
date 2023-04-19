import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  user:any;
  constructor(private authGuard:AuthGuard) { }
 

  ngOnInit(): void {
    const x = document.getElementById("body");
    x!.style.background ="#FFFFFF";
  }

}
