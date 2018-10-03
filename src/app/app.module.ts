import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// componentes
import { AppComponent } from './app.component';
import { IntroComponent } from './views/intro/intro.component';
import { LoginComponent } from './views/login/login.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { WallComponent } from './views/wall/wall.component';
import { EventsComponent } from './views/events/events.component';
import { SubscribeComponent } from './views/subscribe/subscribe.component';
import { ViewProfileComponent } from './views/view-profile/view-profile.component';
import { EventDetailComponent } from './popUp/event-detail/event-detail.component';
import { DetailPlaceComponent } from './popUp/detail-place/detail-place.component';
import { YourEventsComponent } from './popUp/your-events/your-events.component';
import { YourPlaceComponent } from './popUp/your-place/your-place.component';
import { UploadPhotoComponent } from './popUp/upload-photo/upload-photo.component';
import { EditProfileComponent } from './popUp/edit-profile/edit-profile.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { CreateAccountNameWorkComponent } from './popUp/create-account-name-work/create-account-name-work.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    LoginComponent,
    CreateAccountComponent,
    WelcomeComponent,
    WallComponent,
    EventsComponent,
    SubscribeComponent,
    ViewProfileComponent,
    EventDetailComponent,
    DetailPlaceComponent,
    YourEventsComponent,
    YourPlaceComponent,
    UploadPhotoComponent,
    EditProfileComponent,
    CreateAccountNameWorkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
