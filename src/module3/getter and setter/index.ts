{
  // getter and setter
  class BankAccount {
    public id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    set deposit(amount: number) {
      if (amount < 0) {
        throw new Error("Amount must be positive value!");
      }
      this._balance = this._balance + amount;
    }
    get balance() {
      return this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);

  //   goribManusherAccount.addDeposit(-20);

  //   const myBalance = goribManusherAccount.getBalance();
  goribManusherAccount.deposit = 100;
  const myBalance = goribManusherAccount.balance;
  console.log(myBalance);

  //
}
