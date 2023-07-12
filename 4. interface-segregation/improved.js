// Case improved and apply the principle ✅

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  login() {
    // ...Logic login
  }

  logout() {
    // ...Logic logout
  }
}

class MessageSender {
  constructor(user) {
    this.user = user;
  }

  sendMessage() {
    // ...Logic send message
  }
}

class StatusPoster {
  constructor(user) {
    this.user = user;
  }

  postStatus() {
    // ...Logic post status
  }
}

const user = new User("Diego Cortes", "diego@example.com", "password");
const messageSender = new MessageSender(user);
const statusPoster = new StatusPoster(user);