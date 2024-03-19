import { Component, input, output } from '@angular/core';
import { Bill } from 'ng-core';

@Component({
  selector: 'lib-bill, [libBill]',
  standalone: true,
  imports: [],
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.css'
})
export class BillComponent {
  bill = input.required<Bill>();
  setPending = output<string>();
  billPay(id: string) {
    this.setPending.emit(id);
  }
}
