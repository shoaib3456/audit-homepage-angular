import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Ng2TelInputModule } from 'ng2-tel-input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SignupComponent,
    ThankyouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    Ng2TelInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
