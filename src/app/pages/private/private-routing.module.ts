import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsercizioComponent } from './esercizio/esercizio.component';
import { HomeComponent } from './home/home.component';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {path:'', component: PrivateComponent, children:[
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'esercizi', component: EsercizioComponent
    },
    {
      path: 'watch', loadChildren: ()=> import('./watch/watch.module').then(res => res.WatchModule)
    },
    {
      path:'', redirectTo: 'home', pathMatch:'full'
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
