import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserDBService } from '../database/user-db.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {
  email = '';
  password = '';
  error = '';
  username = '';
  image = Math.floor(Math.random() * 100) + 1;

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController,
    private userDB: UserDBService
  ) { }

  ngOnInit() {}

  signup() {
    this.fireauth.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(res => {
        if (res.user) {
          console.log(res.user);
          this.userDB.createUser(this.fireauth.auth.currentUser.uid, {id: this.fireauth.auth.currentUser.uid, services: ["gagi"]});
          this.updateProfile();
        }
      })
      .catch(err => {
        console.log(`login failed ${err}`);
        this.error = err.message;
      });
  }

  updateProfile() {
    this.fireauth.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        user.updateProfile({
          displayName: this.username,
          photoURL: `https://picsum.photos/id/${this.image}/200/200`
        })
          .then(() => {
            this.router.navigateByUrl('/search');
          });
      }
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
