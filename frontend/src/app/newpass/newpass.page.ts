import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.page.html',
  styleUrls: ['./newpass.page.scss'],
})

export class NewpassPage {
  email = '';
  error = '';
  image: number;

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController,
    ) { }

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

  async presentToast(message, showButton, position, duration) {
    const toast = await this.toastController.create({
      message,
      showCloseButton: showButton,
      position,
      duration
    });
    await toast.present();
  }
}
