import { Message } from 'element-ui';

class CustomErrorHandling {
  static showError(message) {
    Message.error({
      message: message,
      showClose: true,
      duration: 2000 
    });
  }

  static showSuccess(message) {
    Message.success({
      message: message,
      showClose: true,
      duration: 2000
    });
  }

  static showWarning(message) {
    Message.warning({
      message: message,
      showClose: true,
      duration: 2000
    });
  }
}

export default CustomErrorHandling;