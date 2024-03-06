import { Component, inject } from '@angular/core';
import { Bill, BillsService } from 'orders/bills';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Orders Application';
  bill: Bill = {
    id: '1',
    name: 'Archery supplies',
    amount: 123.45,
    date: new Date(),
  };
  pendingBills: Bill[] = inject(BillsService).getPending();
}
