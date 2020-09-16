import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/dashboard/categories/categories.component';
import { PostComponent } from './components/dashboard/post/post.component';
import { ResumeComponent } from './components/dashboard/resume/resume.component';

const routes: Routes = [
  { path: 'resume', component: ResumeComponent },
  { path: 'posts', component: PostComponent },
  { path: 'categories', component: CategoriesComponent },
  // { path: 'resume', component: ResumeComponent },
  { path: '**', pathMatch: 'full', redirectTo:'resume' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
