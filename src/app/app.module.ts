import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { MenuDetailsComponentComponent } from './menu-details-component/menu-details-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    HomeComponentComponent,
    FooterComponentComponent,
    NotFoundComponentComponent,
    MenuComponentComponent,
    MenuDetailsComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
