import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './auth.guard'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { EntityDetailComponent } from './pages/entity-detail/entity-detail.component'

const routes: Routes = [
  /* { path: '', component: HomePageComponent, pathMatch: 'full'}, */
  { path:'instituciones', component: HomePageComponent,pathMatch: 'full',data: { mode: 'institution' } },
  { path:'cursos', component: HomePageComponent,pathMatch: 'full',data: { mode: 'course' } },
  { path:'instituciones/:institutionId', component: EntityDetailComponent },
  { path:'cursos/:courseId', component: EntityDetailComponent,pathMatch: 'full'},
  { path:'', redirectTo: 'instituciones', pathMatch: 'full'}
  //TODO Agregar las rutas de los componentes
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
