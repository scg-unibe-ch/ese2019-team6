import { Component, OnInit } from '@angular/core';
import {ToastController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editprof2',
  templateUrl: './editprof2.page.html',
  styleUrls: ['./editprof2.page.scss'],
})
export class Editprof2Page{

  user: any;
  email: string = '';
  password: string = '';
  username: string = '';
  image: number;
  error: string;
  linkError: string = '';

  constructor(
    private toastController: ToastController,
    private fireauth: AngularFireAuth,
    private router: Router
  ) { }

  ionViewDidEnter() {
    this.fireauth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    })
  }

  updateEmail() {
    this.user.updateEmail(this.email)
      .then(() => {
        this.email = '';
        this.presentToast('Email updated', false, 'bottom', 1000);
        this.error = '';
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }

  updateUsername() {
    this.user.updateProfile({
      displayName: this.username
    })
      .then((data) => {
        console.log(data);
        this.username = '';
        this.presentToast('Username updated', false, 'bottom', 1000);
        this.error = '';
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }

  updateImage() {
    this.user.updateProfile({
      photoURL: `https://picsum.photos/id/${this.image}/200/200`
    })
      .then((data) => {
        console.log(data);
        this.image = null;
        this.presentToast('Image updated', false, 'bottom', 1000);
        this.error = '';
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }

  updatePassword() {
    this.user.updatePassword(this.password)
      .then(() => {
        this.password = '';
        this.presentToast('Password updated', false, 'bottom', 1000);
        this.error = '';
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }


  bckhme() {
      this.router.navigate(['/home']);
  }

  async presentToast(message, show_button, position, duration) {
    const toast = await this.toastController.create({
      message: message,
      showCloseButton: show_button,
      position: position,
      duration: duration
    });
    toast.present();
  }
}

