import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule.forRoot({title: 'ExportByModule application configuration'},
      {title: 'ExportByRoot application configuration'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
