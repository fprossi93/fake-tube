import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/private/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: 'private', loadChildren: () => import('./pages/private/private.module').then((module) => module.PrivateModule) },
  { path: 'generic/:motivation', component: NotFoundComponent },
  { path: '', pathMatch: 'full', redirectTo: 'private' },
  { path: '**', redirectTo: 'generic/motivationNotFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
