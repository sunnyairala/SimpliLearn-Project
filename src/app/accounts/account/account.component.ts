import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService],
})
export class AccountComponent implements OnInit {
  @Input()
  account: {
    name: string;
    status: string;
  } = {
    name: '',
    status: '',
  };
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {}

  @Input()
  id: number = 0;

  ngOnInit(): void {}
  accountDeleted() {
    this.loggingService.logAccountDeleted(this.account.name);
    this.accountService.deleteAccount(this.account.name);
  }
  changeStatus(newStatus: string) {
    this.loggingService.logStatusChange(
      this.id,
      this.account.name,
      this.account.status,
      newStatus
    );
    this.accountService.updateAccountStatus(this.id, newStatus);
  }
}
