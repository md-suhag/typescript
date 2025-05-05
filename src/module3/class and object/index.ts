{
  // oop class

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("Tom", "dog", "ghew ghew");
  const cat = new Animal("cutie", "cat", "meaw meaw");

  cat.makeSound();
  ////
}
