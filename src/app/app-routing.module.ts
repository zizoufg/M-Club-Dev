import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { TarifComponent } from './Components/tarif/tarif.component';
import { EquipeComponent } from './Components/equipe/equipe.component';
import { GymFitnessComponent } from './Components/gym-fitness/gym-fitness.component';
import { PiscineComponent } from './Components/piscine/piscine.component';
import { BuvetteComponent } from './Components/buvette/buvette.component';
import { HammemComponent } from './Components/hammem/hammem.component';
import { PlanComponent } from './Components/plan/plan.component';
import { LoginComponent } from './Components/login/login.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { AuthGuard } from './services/auth-guard.service';
import { TestComponent } from './Components/test/test.component';
import { TestUserComponent } from './Components/test-user/test-user.component';
import { ClientsDashboardComponent } from './Components/clients-dashboard/clients-dashboard.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'header',component:HeaderComponent},
{path:'footer',component:FooterComponent},
{path:'contact',component:ContactComponent},
{path:'tarif',component:TarifComponent},
{path:'equipe',component:EquipeComponent},
{path:'gym',component:GymFitnessComponent},
{path:'piscine',component:PiscineComponent},
{path:'buvette',component:BuvetteComponent},
{path:'hammem',component:HammemComponent},
{path:'plan',component:PlanComponent},
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashbordComponent },
{path: 'test',component:TestComponent},
{path:'test-user',component:TestUserComponent},
{path:'clients-dashboard',component:ClientsDashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top' // or 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
