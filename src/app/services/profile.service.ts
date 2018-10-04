import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, fromDocRef } from '@angular/fire/firestore';
import { IProfile } from './profile';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  private ProfileDataCollection: AngularFirestoreCollection<IProfile>
  ProfileData: Observable<IProfile[]>;
  InfoProfile: Observable<any>

  constructor(public afs: AngularFirestore) {
    this.ProfileDataCollection = afs.collection<IProfile>('ProfileData');
    this.ProfileData = this.ProfileDataCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IProfile;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  // addProfileData(email: string, uid: string, name: string, nameProyect: string, workItem: string) {

  addProfileAuth(name: string, email: string, uid: string) {
    const data: IProfile = {
      email: email,
      date: new Date().toISOString(),
      uid: uid,
      name: name,
      nameProyect: null,
      photo: null,
      workItem: null,
      address: null,
      areasInterest: null
    }

    console.log('data addprof', data);


    this.ProfileDataCollection.doc(uid).set(data)
  }


  getInfoProfile() {
    this.ProfileDataCollection = this.afs.collection('ProfileData');
    this.InfoProfile = this.ProfileDataCollection.valueChanges();
    return this.InfoProfile;
  }

  addNameWork(info: string, uid: string) {
    this.afs.collection('ProfileData').doc(uid).update({
      nameWork: info
    })
  }

  addAreasInterest(info: string, uid: string) {
    this.afs.collection('ProfileData').doc(uid).update({
      areasInterest: info
    })
  }

}
