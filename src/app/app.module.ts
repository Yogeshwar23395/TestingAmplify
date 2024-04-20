import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { TechnicalSolutionsComponent } from './technical-solutions/technical-solutions.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { NEWSComponent } from './news/news.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { ServicesComponent } from './services/services.component';
import { ProjectComponent } from './project/project.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    TechnicalSolutionsComponent,
    PurchaseComponent,
    NEWSComponent,
    VideoSectionComponent,
    ServicesComponent,
    ProjectComponent,
    TestimonialsComponent,
    BlogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    CarouselModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
