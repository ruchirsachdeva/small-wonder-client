import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() {
    emailjs.init('user_j1poPFQiQL7NeK76EVAuH'); // ✅ Init constructor mein ek baar hi ho raha hai
  }

  send(templateParams: { from_name: string; to_name: string; message: string; reply_to: string; }) {
    emailjs.send('ruchir-gmail', 'template_y5dkc0b', templateParams)
      .then((response) => {
        console.log('✅ Mail Sent Successfully!', response.status, response.text);
      })
      .catch((err) => {
        console.error('❌ Mail Sending Failed!', err);
      });
  }
}
