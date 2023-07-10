import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './materials/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScrollDirective } from './directives/scroll.directive';
import { ScrollbackDirective } from './directives/scrollback.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScrollDirective,
    ScrollbackDirective,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // FilterPipe
  ],
  // exports: [
  //   FilterPipe
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
