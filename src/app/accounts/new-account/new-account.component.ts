import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { LoggingService } from 'src/app/services/logging.service';
import { AccountsComponent } from '../accounts.component';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],
})
export class NewAccountComponent implements OnInit {
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.loggingService.logAccountAdded(accountName, accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
  }
}
