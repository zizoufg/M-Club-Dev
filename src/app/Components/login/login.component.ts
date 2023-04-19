import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string ='';
  password: string='';
  errorMessage: string='';
  constructor(private authGuard: AuthGuard, private router: Router) { }

  ngOnInit(): void {
    const background = document.getElementById("body");
    
    background!.style.backgroundImage = "url(/assets/Contact-Background.jpg)";
    background!.style.backgroundSize ="cover";
   
    
      setTimeout(
          function open(event){
              document.querySelector<HTMLElement>(".popup")!.style.display = "block";
          },
          1000
      )

  
  
  document.querySelector<HTMLElement>("#close")!.addEventListener("click", function(){
      document.querySelector<HTMLElement>(".popup")!.style.display = "none";
  });
  
  document.querySelector<HTMLElement>("#continue")!.addEventListener("click", function(){
      document.querySelector<HTMLElement>(".popup")!.style.display = "none";
  });
  }
  login(): void {
    this.errorMessage = '';
    const error = document.getElementById("error");
    error!.style.display="none";
    const emailValue = this.email
    const passwordValue = this.password
    const currentUser = {email: emailValue ,password: passwordValue};
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    if (this.authGuard.isAuthenticated()) {
      if (this.authGuard.isAuthorized(this.email, this.password)) {
        this.router.navigate(['dashboard']);
        console.log('test');
        
      } else {
        this.errorMessage = 'Invalid email or password.';
      error!.style.display="block";
        error!.innerHTML = this.errorMessage; 
        error!.style.color ="red";
       
        
        
       
      }
    } else {
      this.errorMessage = 'Invalid email or password.';
      error!.style.display="block";
        error!.innerHTML = this.errorMessage; 
        error!.style.color ="red";
        
      
    }
  }
}







