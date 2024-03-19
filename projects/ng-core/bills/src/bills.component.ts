import { Component, inject } from '@angular/core';
import { BillsService, Bill } from 'ng-core';
import { BillComponent } from "./bill/bill.component";

@Component({
    selector: 'lib-bills',
    standalone: true,
    templateUrl: './bills.component.html',
    styleUrl: './bills.component.css',
    imports: [BillComponent]
})
export class BillsComponent {
  bills: Bill[] = inject(BillsService).getAll();
  handleBillPending(id: string) {
    console.log(id);
  }
}
