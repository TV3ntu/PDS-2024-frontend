import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { RouterModule } from '@angular/router'
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { HeaderComponent } from './components/header/header.component'
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card';
import { InstitutionComponent } from './components/institution/institution.component';
import { InstitutionListComponent } from './components/institution-list/institution-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    InstitutionComponent,
    InstitutionListComponent,
    SearchBarComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
