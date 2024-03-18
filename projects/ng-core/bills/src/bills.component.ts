import { Component, inject } from '@angular/core';
import { Bill } from './dto/bill';
import { BillsService } from './services/bills.service';

@Component({
  selector: 'lib-bills',
  standalone: true,
  imports: [],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css'
})
export class BillsComponent {
  bills: Bill[] = inject(BillsService).getAll();
}
