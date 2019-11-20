import { Component, OnInit } from '@angular/core';
import { ServiceModel } from '../models/service.model';
import { NavController } from '@ionic/angular';
import { ServiceDBService } from '../database/service-db.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  private searchEntry: string = '';
  private serviceList: ServiceModel[];
  private filteredList: ServiceModel[];
  private subscription: Subscription;

  constructor(
    private navCtrl: NavController,
    private serviceDB: ServiceDBService
  ) { }

  ngOnInit() {
    this.subscription = this.serviceDB.getServices().subscribe(services => {
      this.serviceList = services;
      this.filteredList = this.serviceList;
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  filterList(filter: string) {
    this.filteredList = this.serviceList.filter(service => service.name.indexOf(filter) != -1);
  }

  goToServicePage(id: string) {
    this.navCtrl.navigateForward('services/' + id);
  }

}
