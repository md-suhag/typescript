{
  // access modifiers

  class BankAccount {
    public id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      if (amount < 0) {
        throw new Error("Amount must be positive value!");
      }
      this._balance = this._balance + amount;
    }
    public getBalance() {
      return this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);

  goribManusherAccount.addDeposit(-20);

  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance);

  //
}
