import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultPage } from './pages/default/default-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: DefaultPage,
    children: [
        {
          path: 'home',
          loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
        },
        {
          path: '',
          loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
        }
    ]
  },
    // todo error page
  // {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
