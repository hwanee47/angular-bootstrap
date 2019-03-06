import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuTrigger} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TopComponent } from './top/top.component';
import { SideComponent } from './side/side.component';
import { MainComponent } from './main/main.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopComponent,
    SideComponent,
    MainComponent,
    BodyComponent,
    MatMenuTrigger
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents(null),
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
