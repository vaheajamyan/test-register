import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: DefaultComponent,
    children: [
        {
          path: 'home',
          loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
        },
        {
          path: 'register',
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
