import { Component, OnInit } from '@angular/core';
import { MailService } from '../../../services/mail.service' ;


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  };

  constructor(private  mailService: MailService) { }

  ngOnInit() {
  }

  sendEmail() {
    this.mailService.send(this.formData);
  }

}
