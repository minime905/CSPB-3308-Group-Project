import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuildComponent } from './build/build.component';
import { CompareComponent } from './compare/compare.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'build', component: BuildComponent},
  {path: 'compare', component: CompareComponent},


  //otherwise redirect to home!!!!
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
