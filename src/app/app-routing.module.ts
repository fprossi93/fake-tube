import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'private', loadChildren: ()=> import('./pages/private/private.module').then(res => res.PrivateModule)
},
{
  path:'', pathMatch:'full', redirectTo:'private'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
