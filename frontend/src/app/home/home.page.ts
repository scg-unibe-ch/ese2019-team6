import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  search: string = '';

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  searchService() {
    if (this.search != '')
      this.navCtrl.navigateRoot('search?q=' + this.search);
  }
}

