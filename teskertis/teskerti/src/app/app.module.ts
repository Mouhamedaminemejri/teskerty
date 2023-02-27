import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {FocusTrapModule} from 'primeng/focustrap';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import {TabViewModule} from 'primeng/tabview';
import { LoginComponent } from './components/login/login.component';
import{AngularFireModule} from '@angular/fire/compat';
import { TicketsComponent } from './components/tickets/tickets.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    TicketsComponent,
     NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FocusTrapModule,
    TabViewModule,
    RippleModule,
    RadioButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
