import { Component, OnInit } from '@angular/core';
import { ServiceModel } from '../models/service.model';
import { ServiceDBService } from '../database/service-db.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
    private serviceDB: ServiceDBService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.updateData();
    this.route.queryParamMap.subscribe(params => {
      this.queryParamParser(params);
    });
  }

  filterList(filter: string) {
    this.filteredList = this.serviceList.filter(service => service.name.toLowerCase().indexOf(filter.toLowerCase()) != -1);
  }

  updateData() {
    return new Promise((resolve, reject) => {
      this.subscription = this.serviceDB.getData().subscribe(services => {
        this.serviceList = services;
        if (this.searchEntry == '' || this.searchEntry == null)
          this.filteredList = this.serviceList;
        else
          this.filteredList = this.serviceList.filter(service => service.name.toLowerCase().indexOf(this.searchEntry.toLowerCase()) != -1);
        this.subscription.unsubscribe();
        resolve();
      },
        err => {
        reject(err);
        });
    });
  }

  refresh(event) {
    this.updateData()
      .then(event.target.complete())
      .catch(() => {
        event.target.complete();
        //ToDo: Show error
      });
  }

  queryParamParser(params: ParamMap) {
    this.searchEntry = params.get('q');
    this.updateData();
  }
}
