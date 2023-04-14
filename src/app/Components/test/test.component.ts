import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    users:any =[];
  constructor() { }

  ngOnInit(): void {
    this.users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];
    
  }
    
}
    


