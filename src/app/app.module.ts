import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl , Validators} from '@angular/forms';
import { HttpModule, Http, Response } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/Rx';

//for multi language
import {TranslateModule, TranslateService, TranslateStaticLoader, TranslateLoader} from 'ng2-translate';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { SignUpComponent } from './signup/signup.component';
import { ThanksComponent } from './thanks/thanks.component';
import { HeaderComponent } from './header/header.component';
import { searchMusicComponent } from './searchmusic/searchMusic.component';
import { searchVideoComponent } from './searchVideos/searchVideo.component';

//services
import { AuthenticationService } from './_services/authentication.service';
import { SearchService } from './_services/SearchService';
import { SearchVideo } from './_services/SearchVideo.Service';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavmenuComponent,
    SignUpComponent,
    ThanksComponent,
    HeaderComponent,
    searchMusicComponent,
    searchVideoComponent 
  ],
  imports: [
    CommonModule,
    HttpModule,   
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,       
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
  }),
    RouterModule.forRoot([
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },   
        { path: 'signup', component: SignUpComponent },
        { path: 'thanks', component: ThanksComponent },
        { path: 'login', component: LoginComponent },
        { path: 'searchmusic', component: searchMusicComponent }, 
        { path: 'searchVideos', component: searchVideoComponent },      
        { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [AuthenticationService, SearchService, TranslateService, SearchVideo ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
