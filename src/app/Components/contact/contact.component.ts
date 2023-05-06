import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';
import { URL } from 'url';
import { ClientService } from 'src/app/services/client.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  client:any ={};
  feedback:any ={};
  constructor(private ClientService :ClientService, private NotificationService:NotificationService) { }

  ngOnInit(): void {
    
    const x  = document.getElementById("body");
    x!.style.backgroundImage = "url(/assets/Contact-Background.jpg)";
    x!.style.backgroundRepeat ="no-repeat";
    x!.style.backgroundSize ="450vh";
  
  
    



////////////////////////COUNTDOWN//////////////////////////////////////
    const button = document.getElementById("myButton") as HTMLButtonElement;
const countdown = document.getElementById("countdown") as HTMLElement;
let interval: number | null = null;

button.addEventListener("click", function() {
  if (!interval) {
    const now = new Date();
    const deadline = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000);
    localStorage.setItem("countdownDeadline", deadline.getTime().toString());
    startCountdown();
  }
});

function startCountdown() {
  const deadlineString = localStorage.getItem("countdownDeadline");
  if (deadlineString) {
    const deadline = parseInt(deadlineString);
    countdown.innerHTML = "Le compte à rebours est en cours...";
    let interval:any = setInterval(function() {
      const current = new Date();
      const difference = deadline - current.getTime();
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      countdown.innerHTML = days + " jours, " + hours + " heures, " + minutes + " minutes, " + seconds + " secondes";
      if (difference < 0) {
        clearInterval(interval);
        interval = null;
        countdown.innerHTML = "Le compte à rebours est terminé!";
        localStorage.removeItem("countdownDeadline");
      }
    }, 1000);
  } else {
    countdown.innerHTML = "Cliquez sur le bouton pour démarrer le compte à rebours";
  }
}

startCountdown();
    

  }
  Inscription(){
    const Nom:any= document.getElementById("ClientNom");
    const Prenom:any = document.getElementById("ClientPrenom");
    const Email:any = document.getElementById("ClientEmail");
    const Tel:any = document.getElementById("ClientTel");
    const Abonnement:any = document.getElementById("ClientAbonnement");
    const Duree:any= document.getElementById("ClientDuree");

    const NameVal:any = Nom.value+' '+Prenom.value;
    const EmailVal:any = Email.value;
    const TelVal:any = Tel.value;
    const AbonnementVal:any = Abonnement.value;
    const DureeVal:any = Duree.value;
    this.client = {name:NameVal , email: EmailVal, tel:TelVal, abonnement:AbonnementVal, duree:DureeVal};
    this.ClientService.addClient(this.client).subscribe((Client) => {
      console.log(`Client added: ${Client}`);
      
    });
    location.reload();



    

  }
  FeedBack(){
    const Nom:any = document.getElementById("feedNom");
    const Prenom:any = document.getElementById("feedPrenom");
    const Email:any = document.getElementById("feedEmail");
    const Tel:any = document.getElementById("feedTel");
    const Message:any = document.getElementById("feedMessage");

    const NameVal:any = Nom.value+' '+Prenom.value;
    const EmailVal:any = Email.value;
    const TelVal:any = Tel.value;
    const MessageVal:any = Message.value;
    this.feedback = { name:NameVal, email:EmailVal,tel:TelVal,message:MessageVal};
    this.NotificationService.addNotification(this.feedback).subscribe((notification)=>{
      console.log(`notification added : ${notification}`);
    })
    location.reload();
    
    
  }

}
