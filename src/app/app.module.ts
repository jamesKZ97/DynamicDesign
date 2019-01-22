import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { DarkNavbarComponent } from './dark-navbar/dark-navbar.component';
import { LightNavbarComponent } from './light-navbar/light-navbar.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, DarkNavbarComponent, LightNavbarComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule { }

