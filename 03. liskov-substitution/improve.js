// Case to improve ❌

class Animal {
  eat() {
    console.log('The animal is eating');
  }
}

class Dog extends Animal {
  eat() {
    console.log('The dog is eating food');
  }

  bark() {
    console.log('The dog is barking');
  }
}

const dog = new Dog();
dog.eat(); // The dog is eating food