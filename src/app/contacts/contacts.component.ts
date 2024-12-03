import { Component } from '@angular/core';
import { faFacebook, faTiktok, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  faFacebook = faFacebook;
  faTiktok = faTiktok;
  faWhatsapp=faWhatsapp;
  faTwitter=faTwitter;

  // Additional icons can be added similarly
}
