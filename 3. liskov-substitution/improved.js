// Case improved and apply the principle ✅

class Animal {
  eat() {
    console.log('The animal is eating');
  }
}

class Dog extends Animal {
  bark() {
    console.log('The dog is barking');
  }
}

const dog = new Dog();
dog.eat();  // The animal is eating