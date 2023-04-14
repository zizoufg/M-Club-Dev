import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-test-user',
  templateUrl: './test-user.component.html',
  styleUrls: ['./test-user.component.css']
})
export class TestUserComponent implements OnInit {
  @Input() user:any
  constructor() { }

  ngOnInit(): void {
  }

}
