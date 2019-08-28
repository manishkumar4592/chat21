import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiledeskWidgetModule } from './chat21/tiledeskwidget.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TiledeskWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
