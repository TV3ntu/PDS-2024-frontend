import { NotificationComponent } from './components/notification/notification.component';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { HeaderComponent } from './components/header/header.component'
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card';
import { EntityCardComponent } from './components/entity-card/entity-card.component';
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CategoryComponent } from './components/category/category.component';
import { EntityDetailComponent } from './pages/entity-detail/entity-detail.component';
import { AssignmentsModalComponent } from './components/assignments-modal/assignments-modal.component';
import { AssignmentDayCardComponent } from './components/assignment-day-card/assignment-day-card.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import {  MatFormFieldModule } from '@angular/material/form-field'
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ReserveCardComponent } from './components/reserve-card/reserve-card.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { assignmentPageComponent } from './pages/assignment-page/assignment-page.component';
import { SubscriptionsPageComponent } from './pages/subscriptions-page/subscriptions-page.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminButtonComponent } from './components/admin-button/admin-button.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { CourseStatsPageComponent } from './pages/course-stats-page/course-stats-page.component';
import { SubscribeModalComponent } from './components/subscribe-modal/subscribe-modal.component';
import { ReviewModalComponent } from './components/review-modal/review-modal.component';
import { DatePipe } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { UsersModalComponent } from './components/users-modal/users-modal.component';
import { ReviewComponent } from './components/review/review.component';
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
    AssignmentDayCardComponent,
    ProfileFormComponent,
    LoginPageComponent,
    assignmentPageComponent,
    NotificationComponent,
    ProfilePageComponent,
    ReserveCardComponent,
    BottomNavComponent,
    SubscriptionsPageComponent,
    CreateFormComponent,
    AdminPageComponent,
    AdminButtonComponent,
    RegisterFormComponent,
    RegisterPageComponent,
    CourseStatsPageComponent,
    SubscribeModalComponent,
    ReviewModalComponent,
    LoaderComponent,
    UsersModalComponent,
    ReviewComponent
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
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe,{ provide: MAT_DATE_LOCALE, useValue: 'es-AR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
