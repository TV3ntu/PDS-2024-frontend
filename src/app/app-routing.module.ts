import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './auth.guard'
import { HomePageComponent } from './pages/home-page/home-page.component'

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full'},
  { path:'instituciones', component: HomePageComponent,pathMatch: 'full' },
  { path:'cursos', component: HomePageComponent,pathMatch: 'full' }
  //TODO Agregar las rutas de los componentes
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
