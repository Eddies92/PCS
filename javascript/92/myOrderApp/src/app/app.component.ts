import { Component } from '@angular/core';
import Category from './shared/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myOrderApp';

  category: Category = {

    names: ['Home', 'Electronics', 'Clothes'],
    item: {
      name: 'Vase',
      brand: 'Apple',
      price: 9.99
    }
  };

}

