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
import { EntityCardComponent } from './components/entity-card/entity-card.component';
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CategoryComponent } from './components/category/category.component';
import { EntityDetailComponent } from './pages/entity-detail/entity-detail.component';
import { AssignmentsModalComponent } from './components/assignments-modal/assignments-modal.component';
import { AssignmentDayCardComponent } from './components/assignment-day-card/assignment-day-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    EntityCardComponent,
    EntityListComponent,
    FooterComponent,
    SearchBarComponent,
    CategoryComponent,
    EntityDetailComponent,
    AssignmentsModalComponent,
    AssignmentDayCardComponent
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
