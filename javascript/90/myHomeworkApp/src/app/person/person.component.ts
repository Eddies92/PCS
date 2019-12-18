import { Component, OnInit, Input } from '@angular/core';
import { AddressComponent } from '../address/address.component'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person;
  address = { street: '1600 Pennsylvania Ave', city: 'Washington DC', zip: '20500' }

  constructor() { }

  ngOnInit() {
  }

}
