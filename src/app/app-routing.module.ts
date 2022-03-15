import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { SoonComponent } from './soon/soon.component';

const routes: Routes = [
  {
    path:"logo",
    component:BannerComponent
  },
 {
  path:"About",
  component:AboutComponent
 },
 {
  path:"Services",
  component:ServicesComponent
 },
 {
  path:"Home",
  component:BannerComponent
 },
 
 {
  path:"Portfolio",
  component:SoonComponent
 },
 {
  path:"Blog",
  component:SoonComponent
 },
 {
  path:"Contact",
  component:ContactComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
