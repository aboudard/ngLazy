import { Component, inject } from '@angular/core';
import { Bill } from './dto/bill';
import { BillsService } from './services/bills.service';

@Component({
  selector: 'lib-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent {
  bills: Bill[] = inject(BillsService).getAll();
}
