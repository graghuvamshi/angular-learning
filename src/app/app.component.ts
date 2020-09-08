import { Component, VERSION } from '@angular/core';
import { AccountsService} from './accounts.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ AccountsService ]
})
export class AppComponent  {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService : AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
