// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from '@Angular/fire/database'
import { AngularFireStorageModule } from "@angular/fire/storage";
// Modules
import { PrimengModule } from './primeng.module';
import { AppRoutingModule } from './app-routing.module';
// Services
import { ConfigService } from './services/config.service';
import { MessageService } from 'primeng/api';
// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/dashboard/categories/categories.component';
import { AddCategoriesComponent } from './components/dashboard/categories/add-categories/add-categories.component';
import { PostComponent } from './components/dashboard/post/post.component';
import { AddPostComponent } from './components/dashboard/post/add-post/add-post.component';
import { ResumeComponent } from './components/dashboard/resume/resume.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WidgetComponent } from './components/dashboard/widget/widget.component';
import { WidgetStadisticComponent } from './components/dashboard/widget/widget-stadistic/widget-stadistic.component';
import { WidgetLastCommentsComponent } from './components/dashboard/widget/widget-last-comments/widget-last-comments.component';
import { WidgetLastVisitsComponent } from './components/dashboard/widget/widget-last-visits/widget-last-visits.component';
import { HighlightDirective } from './directives/highlight.directive';
import { WidgetCategoryComponent } from './components/dashboard/widget/widget-category/widget-category.component';
import { WidgetUploadThumbnailComponent } from './components/dashboard/widget/widget-upload-thumbnail/widget-upload-thumbnail.component';
import { JoinPipe } from './pipes/join.pipe';
import { LoginComponent } from './components/login/login.component';

export function configFactory(provider: ConfigService) {
  return () => provider.getData();
}

const firebaseConfig = {
  apiKey: 'AIzaSyDuGD4lQNH_tjRIxChb32JIzxpIHRLiPr8',
  authDomain: 'ddr-blog-e2498.firebaseapp.com',
  databaseURL: 'https://ddr-blog-e2498.firebaseio.com',
  projectId: 'ddr-blog-e2498',
  storageBucket: 'ddr-blog-e2498.appspot.com',
  messagingSenderId: '194489156436',
  appId: '1:194489156436:web:5ad49cf29bc22bae567ec1',
  measurementId: 'G-2CTDQD566C',
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoriesComponent,
    PostComponent,
    ResumeComponent,
    SidebarComponent,
    WidgetComponent,
    WidgetStadisticComponent,
    WidgetLastCommentsComponent,
    WidgetLastVisitsComponent,
    AddCategoriesComponent,
    HighlightDirective,
    AddPostComponent,
    WidgetCategoryComponent,
    WidgetUploadThumbnailComponent,
    JoinPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true,
    },
    MessageService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
