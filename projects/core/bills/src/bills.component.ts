import { Component, inject } from '@angular/core';
import { Bill } from 'core';
import { BillsService } from 'core';

@Component({
  selector: 'lib-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css'],
})
export class BillsComponent {
  bills: Bill[] = inject(BillsService).getAll();
}
