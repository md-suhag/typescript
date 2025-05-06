{
  // static

  class Counter {
    static count: number = 0;

    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    incrementBy2() {
      return (Counter.count = Counter.count + 2);
    }
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  const counter1 = new Counter();
  console.log(counter1.incrementBy2());

  const counter2 = new Counter();
  console.log("counter2: " + counter2.incrementBy2());
  console.log("counter2: " + counter2.incrementBy2());

  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
}
