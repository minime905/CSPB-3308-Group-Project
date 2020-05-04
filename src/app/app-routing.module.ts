import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuildComponent } from './build/build.component';
import {CallbackComponent } from './pages/callback/callback.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'build', component: BuildComponent},
  {path: 'callback', component: CallbackComponent},
  {path: 'profile', component: ProfileComponent},

  //otherwise redirect to home!!!!
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
