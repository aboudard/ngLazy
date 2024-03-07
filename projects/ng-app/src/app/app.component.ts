import { Component, inject } from '@angular/core';
import { Bill, BillsService } from 'core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Orders Application';
  bill: Bill = {
    id: '54',
    name: 'Fake bill',
    amount: 987.65,
    date: new Date(),
  };
  pendingBills: Bill[] = inject(BillsService).getPending();
}
