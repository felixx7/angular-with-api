import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from "./api.service";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { FrontComponent } from './front/front.component';
import { VideoComponent } from './video/video.component';
import { ActivityComponent } from './activity/activity.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ChannelsComponent } from './channels/channels.component';
import { PeopleComponent } from './people/people.component';
import { DocumentComponent } from './document/document.component';

const  routes:Routes = [
  { 
    path:'', 
    component:FrontComponent
  }
]

@NgModule({
  imports:      [ 
                  BrowserModule, 
                  FormsModule, 
                  RouterModule.forRoot(routes),
                  HttpClientModule
                ],
  declarations: [ 
                  AppComponent, 
                  HelloComponent,
                  FrontComponent,
                  VideoComponent,
                  ActivityComponent,
                  FooterComponent,
                  HeaderComponent,
                  ChannelsComponent,
                  PeopleComponent,
                  DocumentComponent
                ],
  providers: [ ApiService ],              
  bootstrap: [ AppComponent ]
})
export class AppModule { }
