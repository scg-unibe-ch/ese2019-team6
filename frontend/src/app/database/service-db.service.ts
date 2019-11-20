import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ServiceModel } from '../models/service.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceDBService {
  private serviceCollection: AngularFirestoreCollection<ServiceModel>;
  private services: Observable<ServiceModel[]>;

  constructor(db: AngularFirestore) {
    this.serviceCollection = db.collection<ServiceModel>('services');
    this.services = this.serviceCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      })
    );
  }

  getServices() {
    return this.services;
  }

  getService(id) {
    return this.serviceCollection.doc<ServiceModel>(id).valueChanges();
  }
}
