import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  email = '';
  name = '';
  error = '';
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController,
  ) {
}

  recover() {
    this.fireauth.auth.sendPasswordResetEmail(this.email)
      .then(data => {
        console.log(data);
        this.presentToast('Password reset email sent', true, 'bottom', 3000);
        this.router.navigateByUrl('/login');
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }
