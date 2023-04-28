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
import { FormGroup, FormsModule } from '@angular/forms';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // import the FormsModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ClientsDashboardComponent } from './Components/clients-dashboard/clients-dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CoachDashboardComponent } from './Components/coach-dashboard/coach-dashboard.component';



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
    DashbordComponent,
    ToolbarComponent,
    SidenavComponent,
    ClientsDashboardComponent,
    CoachDashboardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule ,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    FormsModule
     
   
    
  ],
  providers: [[AuthGuard]],
  bootstrap: [AppComponent]
})
export class AppModule { }
