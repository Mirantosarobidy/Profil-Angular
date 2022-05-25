import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { ProfilCreateComponent } from './pages/profil-create/profil-create.component';

const routes: Routes = [
  {
    path:'profil-create',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    component:ProfilCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
