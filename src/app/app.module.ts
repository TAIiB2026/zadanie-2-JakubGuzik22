import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StronaGlownaComponent } from './components/strona-glowna/strona-glowna.component';
import { OAplikacjiComponent } from './components/o-aplikacji/o-aplikacji.component';

@NgModule({
  declarations: [
    AppComponent,
    StronaGlownaComponent,
    OAplikacjiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
