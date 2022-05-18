import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarItemComponent } from './Navbar/navbar-item/navbar-item.component';
import { BodyItemComponent } from './Body/body-item/body-item.component';
import { FooterItemComponent } from './Footer/footer-item/footer-item.component';
import { StudentListPipe } from './student-list.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarItemComponent,
    BodyItemComponent,
    FooterItemComponent,
    // StudentListPipe,
    // FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
