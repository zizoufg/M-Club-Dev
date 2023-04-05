import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { PromotionsComponent } from './Components/promotions/promotions.component';
import { TestComponent } from './Components/test/test.component';
import { NosServicesComponent } from './Components/nos-services/nos-services.component';
import { StatsComponent } from './Components/stats/stats.component';

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
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
