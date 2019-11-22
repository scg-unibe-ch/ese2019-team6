import {Component, OnInit} from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {HttpClient} from '@angular/common/http';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  pages: any = [
    {
      name: 'Home',
      url: 'home'
    },
    {
      name: 'Search',
      url: 'search'
    },
    {
      name: 'Sign Up',
      url: 'signup'
    },
    {
      name: 'Login',
      url: 'login'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private httpClient: HttpClient,
    private menuControl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() { }

  closeMenu() {
    this.menuControl.close().then();
  }
}
