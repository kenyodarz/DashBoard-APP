// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Services
import { LoginGuard } from "src/app/services/login-guard.service";
// Components
import { AddCategoriesComponent } from './components/dashboard/categories/add-categories/add-categories.component';
import { CategoriesComponent } from './components/dashboard/categories/categories.component';
import { AddPostComponent } from './components/dashboard/post/add-post/add-post.component';
import { PostComponent } from './components/dashboard/post/post.component';
import { ResumeComponent } from './components/dashboard/resume/resume.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'resume', component: ResumeComponent, canActivate: [LoginGuard] },
  { path: 'posts', component: PostComponent, canActivate: [LoginGuard] },
  { path: 'posts/add', component: AddPostComponent, canActivate: [LoginGuard] },
  { path: 'categories', component: CategoriesComponent, canActivate: [LoginGuard] },
  { path: 'categories/add', component: AddCategoriesComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'resume', canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
