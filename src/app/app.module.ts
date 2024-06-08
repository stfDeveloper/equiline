import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsletterMsgComponent } from './components/newsletter-msg/newsletter-msg.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DonnaComponent } from './components/donna/donna.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'donna', component: DonnaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NewsletterMsgComponent,
    HomeComponent,
    HeaderComponent,
    DonnaComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
