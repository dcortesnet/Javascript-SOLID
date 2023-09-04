// Case to improve ❌

class Animal {
  eat() {
    console.log('The animal is eating');
  }
}

class Bird extends Animal {
  fly() {
    console.log('The bird is flying');
  }
}

class Ostrich extends Bird {
  fly() {
    throw new Error('Ostriches cannot fly');
  }
}

const bird = new Ostrich();
bird.eat();
bird.fly(); // This breaks the Liskov substitution principle.