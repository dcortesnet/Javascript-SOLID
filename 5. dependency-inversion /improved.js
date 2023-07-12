// Case improved and apply the principle ✅

class EmailService {
  sendEmail(message) {
    // ... Logic send email
  }
}

class NotificationService {
  constructor(emailService) {
    this.emailService = emailService;
  }

  sendNotification(message) {
    this.emailService.sendEmail(message);
  }
}

const emailService = new EmailService();
const notificationService = new NotificationService(emailService);
notificationService.sendNotification("New notification.");