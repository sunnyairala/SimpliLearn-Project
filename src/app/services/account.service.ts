import * as _ from 'underscore';

export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'InActive',
    },
    {
      name: 'Secret Account',
      status: 'Dormant',
    },
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({
      name: name,
      status: status,
    });
  }

  updateAccountStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }

  deleteAccount(accountName: string) {
    this.accounts = _.without(
      this.accounts,
      _.findWhere(this.accounts, {
        name: accountName,
      })
    );
  }
}
