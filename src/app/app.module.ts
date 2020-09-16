// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Modules
import { PrimengModule } from './primeng.module';
import { AppRoutingModule } from './app-routing.module';
// Services
import { ConfigService } from './services/config.service';
// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/dashboard/categories/categories.component';
import { PostComponent } from './components/dashboard/post/post.component';
import { ResumeComponent } from './components/dashboard/resume/resume.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WidgetComponent } from './components/dashboard/widget/widget.component';
import { WidgetStadisticComponent } from './components/dashboard/widget/widget-stadistic/widget-stadistic.component';

export function configFactory(provider: ConfigService) {
  return () => provider.getData();
}

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PrimengModule,
    AppRoutingModule,
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
