import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { NbRadioModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbRadioModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
