// Case improved and apply the principle ✅

class Form {
  calArea() {
    throw new Error('Method not implemented');
  }
}

class Circle extends Form {
  calArea() {
    // ... Logic cal area circle
  }
}

class Rectangle extends Form {
  calArea() {
    // ... Logic cal area rectangle
  }
}

class Triangle extends Form {
  calArea() {
    // ... Logic cal area triangle
  }
}

const circle = new Circle();
circle.calArea();