import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactDBService } from '../database/contact-db.service';
import { ContactModel } from '../models/contact.model';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})

export class ContactPage implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactDB: ContactDBService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      message:['', Validators.required]
    });
  }

  submitMessage() {
    const message: ContactModel = {
      name: this.form.controls['name'].value,
      email: this.form.controls['email'].value,
      message: this.form.controls['message'].value
    };
    this.contactDB.addMessage(message);
  }
}
