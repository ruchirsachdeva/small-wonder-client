import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';



@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() {
    emailjs.init('user_j1poPFQiQL7NeK76EVAuH');
  }

  send(formData: any) {
     const templateParams = {
      // Assuming templateParams requires fields like 'from_name', 'message', etc.
      from_name: formData.firstName + ' ' + formData.lastName,
      to_name: 'Small wonders enquiry team',
      message: formData.message,
      reply_to: formData.email,
      phone_number: formData.phoneNumber
      // ... any other fields required by your email template
    };
    emailjs.send('ruchir-gmail', 'template_y5dkc0b', templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  }
}
