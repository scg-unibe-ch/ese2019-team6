import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserDBService {
  private userCollection: AngularFirestoreCollection<UserModel>;

  constructor(dataBase: AngularFirestore) {
    this.userCollection = dataBase.collection<UserModel>('users');
  }

  getUser(id: string) {
    return this.userCollection.doc<UserModel>(id).valueChanges();
  }

  createUser(id: string, user: UserModel) {
    this.userCollection.doc(id).set(user);
  }

  updateUser(id: string, user: UserModel) {
    this.userCollection.doc(id).update(user);
  }

  deleteUser(id: string) {
    this.userCollection.doc(id).delete();
  }
}
