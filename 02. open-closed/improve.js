// Case to improve ❌

class Form {
  constructor(type) {
    this.type = type;
  }

  calArea() {
    if (this.type === 'circle') {
      // ... Logic cal area circle

    } else if (this.type === 'rectangle') {
      // ... Logic cal area rectangle

    } else if (this.type === 'triangle') {
      // ... Logic cal area rectangle
    }

    // ... etc
  }
}

const form = new Form('circle');
form.calArea();
