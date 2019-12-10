import { Component, OnInit } from '@angular/core';
import { ServiceModel } from '../models/service.model';
import { ActivatedRoute } from '@angular/router';
import { ServiceDBService } from '../database/service-db.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})

export class ServicesPage implements OnInit {
  private service: ServiceModel = {
    name: '',
    content: [''],
    owner: 0,
    contact_details: [''],
    editor: []
  };
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private serviceDB: ServiceDBService
  ) { }

  ngOnInit() {
    this.subscription = this.serviceDB.getService(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.service = data;
      this.subscription.unsubscribe();
    });
  }
}
