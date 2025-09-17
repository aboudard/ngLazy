import { Component, input, output } from '@angular/core';
import { Bill, PaidComponent } from 'ng-core';
import { PendingComponent } from "../pending/pending.component";

@Component({
    selector: 'lib-bill, [libBill]',
    standalone: true,
    templateUrl: './bill.component.html',
    styleUrl: './bill.component.css',
    imports: [PendingComponent, PaidComponent]
})
export class BillComponent {
  bill = input.required<Bill>();
  setPending = output<string>();
  billPay(id: string) {
    this.setPending.emit(id);
  }
}
