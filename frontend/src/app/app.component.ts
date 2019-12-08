import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient } from '@angular/common/http';
import { MenuController } from '@ionic/angular';
import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  pages: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private httpClient: HttpClient,
    private menuControl: MenuController,
    private firebase: FirebaseApp
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.pages = [
          {
            name: 'Home',
            url: 'home'
          },
          {
            name: 'Services',
            url: 'search'
          },
          {
            name: 'Profile',
            url: 'editprof'
          },
          {
            name: 'Contact',
            url: 'contact'
          }
        ];
      } else {
        this.pages = [
          {
            name: 'Home',
            url: 'home'
          },
          {
            name: 'Services',
            url: 'search'
          },
          {
            name: 'Login',
            url: 'login'
          },
          {
            name: 'Sign Up',
            url: 'signup'
          },
          {
            name: 'Contact',
            url: 'contact'
          }
        ];
      }
    });
  }

  closeMenu() {
    this.menuControl.close().then();
  }
}
