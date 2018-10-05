import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// componentes
import { AppComponent } from './app.component';
import { IntroComponent } from './views/intro/intro.component';
import { LoginComponent } from './views/login/login.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { EventsComponent } from './views/events/events.component';
import { SubscribeComponent } from './views/subscribe/subscribe.component';
import { ViewProfileComponent } from './views/view-profile/view-profile.component';
import { EventDetailComponent } from './popUp/event-detail/event-detail.component';
import { DetailPlaceComponent } from './popUp/detail-place/detail-place.component';
import { YourEventsComponent } from './popUp/your-events/your-events.component';
import { YourPlaceComponent } from './popUp/your-place/your-place.component';
import { UploadPhotoComponent } from './popUp/upload-photo/upload-photo.component';
import { EditProfileComponent } from './popUp/edit-profile/edit-profile.component';
import { CheckDataComponent } from './popUp/check-data/check-data.component';
import { SplashComponent } from './views/splash/splash.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { CreateAccountNameWorkComponent } from './popUp/create-account-name-work/create-account-name-work.component';
import { FormUploadComponent } from './views/upload/form-upload/form-upload.component';
import { ListUploadComponent } from './views/upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './views/upload/details-upload/details-upload.component';
import { HereMapComponent } from './here-map/here-map.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { InputMapComponent } from './input-map/input-map.component';

// Firebase
import { AngularFireDatabaseModule } from "@angular/fire/database"
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Services
import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';
import { AcceptTermsComponent } from './views/accept-terms/accept-terms.component';
import { LocationComponent } from './popUp/location/location.component';
import { ProyectNameComponent } from './view/proyect-name/proyect-name.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    LoginComponent,
    CreateAccountComponent,
    WelcomeComponent,
    EventsComponent,
    SubscribeComponent,
    ViewProfileComponent,
    EventDetailComponent,
    DetailPlaceComponent,
    YourEventsComponent,
    YourPlaceComponent,
    UploadPhotoComponent,
    EditProfileComponent,
    CreateAccountNameWorkComponent,
    CheckDataComponent,
    SplashComponent,
    SignUpComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    AcceptTermsComponent,
    CheckDataComponent,
    NavbarComponent,
    HereMapComponent,
    InputMapComponent,
    LocationComponent,
    ProyectNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatSidenavModule,
    MatIconModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      { path: 'nombre-proyecto', component: ProyectNameComponent },
      { path: 'splash', component: SplashComponent },
      { path: 'terminos', component: AcceptTermsComponent },
      { path: 'crear-cuenta', component: CreateAccountComponent },
      { path: 'check', component: CheckDataComponent },
      { path: 'ubicacion', component: LocationComponent },
      { path: 'intro', component: IntroComponent },
      { path: 'login', component: LoginComponent },
      { path: 'guardados', component: YourEventsComponent },
      { path: 'perfil', component: ViewProfileComponent },
      { path: 'eventos', component: EventsComponent },
      { path: 'premium', component: SubscribeComponent },
      { path: 'map', component: InputMapComponent },
      { path: '', redirectTo: 'splash', pathMatch: 'full' },
      { path: '**', redirectTo: 'splash', pathMatch: 'full' },

    ])
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule
  ],
  providers: [AuthService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
