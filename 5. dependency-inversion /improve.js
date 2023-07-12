// Case to improve ❌

class EmailService {
  sendEmail(message) {
    // ... Logic send email
  }
}

class NotificationService {
  constructor() {
    this.emailService = new EmailService();
  }

  sendNotification(message) {
    this.emailService.sendEmail(message);
  }
}

const notificationService = new NotificationService();
notificationService.sendNotification("New notification.");