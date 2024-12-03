import { Component } from '@angular/core';
import { faTachometerAlt, faMapMarkerAlt, faStore, faBox, faMoneyBill, faChartBar, faAddressBook, faHandHolding } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  faDashboard =  faTachometerAlt;
  faLocation = faMapMarkerAlt;
  faShop = faStore;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faAddressBook;
  faHand = faHandHolding;


}
