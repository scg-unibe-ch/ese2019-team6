import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ContactModel } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})

export class ContactDBService {
  private messageCollection: AngularFirestoreCollection<ContactModel>;

  constructor(dataBase: AngularFirestore) {
    this.messageCollection = dataBase.collection<ContactModel>('messages');
  }

  addMessage(message: ContactModel) {
    this.messageCollection.add(message);
  }
}
