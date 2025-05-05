function addValue(num1: number, num2: number): number {
  return num1 + num2;
}

const subtractValue = (
  a: number,

  b: number
): number => a - b;

const userAccount = {
  name: "suhag",
  balance: 1000,
  addBalance(balance: number): string {
    return `My new balance is : ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 2, 5, 6, 1];

const squareOfArr: number[] = arr.map((elem: number): number => elem * elem);
