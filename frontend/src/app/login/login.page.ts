import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  email = '';
  password = '';
  error = '';
  constructor(private fireauth: AngularFireAuth,
              private router: Router,
              private toastController: ToastController,
              public alertController: AlertController) {

  }
  login() {
    this.fireauth.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(res => {
        if (res.user) {
          console.log(res.user);
          this.presentToast('Welcome back to eventify', true, 'bottom', 3000);
          this.router.navigate(['/home']);
        }
      })
      .catch(err => {
        console.log(`login failed ${err}`);
        this.error = err.message;
      });
  }

  async presentToast(message, show_button, position, duration) {
    const toast = await this.toastController.create({
      message,
      showCloseButton: show_button,
      position,
      duration
    });
    await toast.present();
  }
}



/**export class LoginPage implements OnInit {
 * constructor() {
 *
 * }ngOnInit() {
 *
 * }
 */
