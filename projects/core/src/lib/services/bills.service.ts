import { Injectable } from '@angular/core';
import { Bill } from '../dto/bill';

@Injectable({
  providedIn: 'root',
})
export class BillsService {
  getAll(): Bill[] {
    return [
      {
        id: '1',
        name: 'Archery supplies',
        amount: 123.45,
        date: new Date(),
        pending: true,
      },
      {
        id: '2',
        name: 'Fishing supplies',
        amount: 456.78,
        date: new Date(),
        pending: true,
      },
      {
        id: '3',
        name: 'Camping supplies',
        amount: 910.11,
        date: new Date(),
        pending: true,
      },
      {
        id: '4',
        name: 'Hiking supplies',
        amount: 1213.14,
        date: new Date(),
        pending: false,
      },
    ];
  }
  getPending(): Bill[] {
    return this.getAll().filter((bill) => bill.pending);
  }
}
