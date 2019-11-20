import {Component, Input, OnInit} from '@angular/core';
import { ServiceModel } from '../../models/service.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  @Input() service: ServiceModel;

  constructor() { }

  ngOnInit() {}

}
