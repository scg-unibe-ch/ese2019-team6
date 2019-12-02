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

  constructor(db: AngularFirestore) {
    this.serviceCollection = db.collection<ServiceModel>('services');
    this.getData();
  }

  getData(): Observable<ServiceModel[]> {
    return this.serviceCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      })
    );
  }

  getService(id: string) {
    return this.serviceCollection.doc<ServiceModel>(id).valueChanges();
  }

  addService(service: ServiceModel) {
    this.serviceCollection.add(service);
  }

  updateService(id: string, service: ServiceModel) {
    this.serviceCollection.doc(id).update(service);
  }

  deleteService(id: string) {
    this.serviceCollection.doc(id).delete();
  }
}
