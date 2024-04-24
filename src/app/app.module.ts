import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { RouterModule } from '@angular/router'
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {MatCardModule} from '@angular/material/card';
import { InstitutionComponent } from './pages/institution/institution.component';
import { InstitutionListComponent } from './pages/institution-list/institution-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InstitutionComponent,
    InstitutionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
