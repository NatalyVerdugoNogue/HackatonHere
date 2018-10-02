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

  addProfileAuth(email: string, name: string, nameProyect: string, workItem: string) {
    const data: IProfile = {
      email: email,
      date: new Date().toISOString(),
      uid: null,
      name: name,
      nameProyect: nameProyect,
      photo: null,
      workItem: workItem,
      address: null,
      areasInterest: null
    }
    return this.ProfileDataCollection.add(data);
  }

  addUid(uid: string) {
    const data: any = {
      uid: uid
    }
    return this.ProfileDataCollection.add(data);
  }
}
