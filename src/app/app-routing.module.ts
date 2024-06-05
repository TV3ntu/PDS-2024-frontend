import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './auth.guard'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { EntityDetailComponent } from './pages/entity-detail/entity-detail.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { ProfilePageComponent } from './pages/profile-page/profile-page.component'
import { assignmentPageComponent } from './pages/assignment-page/assignment-page.component'

import { SubscriptionsPageComponent } from './pages/subscriptions-page/subscriptions-page.component'
import { AdminPageComponent } from './pages/admin-page/admin-page.component'
import { RegisterPageComponent } from './pages/register-page/register-page.component'

const routes: Routes = [
  /* { path: '', component: HomePageComponent, pathMatch: 'full'}, */
  { path:'admin/agregar/horario', component: assignmentPageComponent,pathMatch: 'full' },
  { path:'ingresar', component: LoginPageComponent,pathMatch: 'full' },
  { path:'register', component: RegisterPageComponent,pathMatch: 'full' },
  { path:'perfil', component: ProfilePageComponent, canActivate: [AuthGuard]},
  { path:'instituciones', component: HomePageComponent,pathMatch: 'full',data: { mode: 'institution' } },
  { path:'cursos', component: HomePageComponent,pathMatch: 'full',data: { mode: 'course' } },
  { path:'suscripciones', component: SubscriptionsPageComponent,pathMatch: 'full',data: { mode: 'suscripciones' } },
  { path:'instituciones/:institutionId', component: EntityDetailComponent },
  { path:'cursos/:courseId', component: EntityDetailComponent,pathMatch: 'full'},
  { path:'admin', component: AdminPageComponent,pathMatch: 'full'},
  { path:'', redirectTo: 'instituciones', pathMatch: 'full'}
  //TODO Agregar las rutas de los componentes
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
