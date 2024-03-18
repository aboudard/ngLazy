import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Bill, BillsService } from 'ng-core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterOutlet]
})
export class AppComponent {
  title = 'ng-app';
  pendingBills: Bill[] = inject(BillsService).getPending();
  // pendingBills: Bill[] = [];
}
