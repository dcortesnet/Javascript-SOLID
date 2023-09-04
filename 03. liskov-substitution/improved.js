// Case improved and apply the principle ✅

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

class Ostrich extends Animal { }

const bird = new Bird();
bird.eat();
bird.fly();

const ostrich = new Ostrich();
ostrich.eat();