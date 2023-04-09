import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';
import { URL } from 'url';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const x  = document.getElementById("body");
    x!.style.backgroundImage = "url(/assets/Contact-Background.jpg)";
    x!.style.backgroundSize ="cover";
    

  }

}
