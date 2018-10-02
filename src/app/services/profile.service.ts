import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IProfile } from './profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private ProfileDataCollection: AngularFirestoreCollection<IProfile>
  ProfileData: Observable<IProfile[]>;

  constructor(public afs: AngularFirestore) {
    this.ProfileDataCollection = afs.collection<IProfile>('ProfileData');
    this.ProfileData = this.ProfileDataCollection.valueChanges();
  }

  // addProfileData(email: string, uid: string, name: string, nameProyect: string, workItem: string) {

  addProfileData(email: string, uid: string) {
    const data: IProfile = {
      email: email,
      date: new Date().toISOString(),
      uid: uid,
      name: null,
      nameProyect: null,
      photo: null,
      workItem: null,
      address: null,
      areasInterest: null
    }
    return this.ProfileDataCollection.add(data);
  }

}
