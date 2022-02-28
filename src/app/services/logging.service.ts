export class LoggingService {
  logAccountAdded(accountName: string, accountStatus: string) {
    console.log(
      'Account ' + accountName + ' with status ' + accountStatus + ' is added.'
    );
  }

  logAccountDeleted(accountName: string) {
    console.log('Account ' + accountName + ' deleted.');
  }

  logStatusChange(
    id: number,
    name: string,
    oldStatus: string,
    newStatus: string
  ) {
    console.log(
      'Changing Account Status of ' +
        id +
        ' - ' +
        name +
        ', from ' +
        oldStatus +
        ' to ' +
        newStatus
    );
  }
}
