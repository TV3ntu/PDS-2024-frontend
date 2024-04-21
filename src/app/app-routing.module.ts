import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './auth.guard'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { InstitutionComponent } from './pages/institution/institution.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'institution', component: InstitutionComponent }
  //TODO Agregar las rutas de los componentes
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
