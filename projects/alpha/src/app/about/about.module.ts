import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
// import { FooterComponent } from 'shell/FooterComponent';
// import { HeaderComponent } from 'shell/HeaderComponent';


@NgModule({
  declarations: [
    AboutComponent,
    // FooterComponent,
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
