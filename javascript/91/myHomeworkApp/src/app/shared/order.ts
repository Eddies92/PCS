import { Item } from '../shared/item';

export interface Order {
    firstName: string;
    lastName: string;
    dateOrdered: string;
    item: Item;
}
