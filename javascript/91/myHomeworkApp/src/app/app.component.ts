import { Component } from '@angular/core';
import { Order } from './shared/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myHomeworkApp';

  order: Order = {
    firstName: 'John',
    lastName: 'Appleseed',
    dateOrdered: '01/01/2020',
    item: {
      id: '01',
      itemName: 'Laptop',
      brand: 'Apple',
      price: '$1,300.01'
    }
  };
}
