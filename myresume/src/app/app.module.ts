import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonPointDirective } from './directives/button-point.directive';
import { DisplayComponent } from './components/display/display.component';
import { DisplayEffectDirective } from './directives/display-effect.directive';
import { AboutComponent } from './components/about/about.component';
import { StrengthsComponent } from './components/strengths/strengths.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ButtonPointDirective,
    DisplayComponent,
    DisplayEffectDirective,
    AboutComponent,
    StrengthsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
