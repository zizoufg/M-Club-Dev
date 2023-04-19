import { Component, OnInit,EventEmitter, Output  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
    const name = localStorage.getItem('currentUser');
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}
