import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './auth.guard'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { EntityDetailComponent } from './pages/entity-detail/entity-detail.component'

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full'},
  { path:'instituciones', component: HomePageComponent,pathMatch: 'full' },
  { path:'insituciones/:id', component: EntityDetailComponent,pathMatch: 'full',data: { mode: 'institution' } },
  { path:'cursos', component: HomePageComponent,pathMatch: 'full' },
  { path:'cursos/:id', component: EntityDetailComponent,pathMatch: 'full',data: { mode: 'course' }},
  //TODO Agregar las rutas de los componentes
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
