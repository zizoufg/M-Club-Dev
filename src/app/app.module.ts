import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { PromotionsComponent } from './Components/promotions/promotions.component';
import { TestComponent } from './Components/test/test.component';
import { NosServicesComponent } from './Components/nos-services/nos-services.component';
import { StatsComponent } from './Components/stats/stats.component';
import { ServicesCardComponent } from './Components/services-card/services-card.component';
import { TarifComponent } from './Components/tarif/tarif.component';
import { EquipeComponent } from './Components/equipe/equipe.component';
import { GymFitnessComponent } from './Components/gym-fitness/gym-fitness.component';
import { EquipeCardComponent } from './Components/equipe-card/equipe-card.component';
import { TestUserComponent } from './Components/test-user/test-user.component';
import { CommonModule } from '@angular/common';
import { PiscineComponent } from './Components/piscine/piscine.component';
import { BuvetteComponent } from './Components/buvette/buvette.component';
import { HammemComponent } from './Components/hammem/hammem.component';
import { PlanComponent } from './Components/plan/plan.component';
import { LoginComponent } from './Components/login/login.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { AuthGuard } from './services/auth-guard.service'; // Import the AuthGuard service
import { FormsModule } from '@angular/forms'; // import the FormsModule


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    CarouselComponent,
    PromotionsComponent,
    TestComponent,
    NosServicesComponent,
    StatsComponent,
    ServicesCardComponent,
    TarifComponent,
    EquipeComponent,
    GymFitnessComponent,
    EquipeCardComponent,
    TestUserComponent,
    PiscineComponent,
    BuvetteComponent,
    HammemComponent,
    PlanComponent,
    LoginComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule 
    
    
  
  ],
  providers: [[AuthGuard]],
  bootstrap: [AppComponent]
})
export class AppModule { }
