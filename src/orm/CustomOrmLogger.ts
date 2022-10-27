import { Logger } from '@nestjs/common';

const MAX_LOG_LENGTH = 800;

export class CustomOrmLogger extends Logger {
  log(message: string): void {
    if (message.length > MAX_LOG_LENGTH) {
      Logger.log(`${message.slice(0, MAX_LOG_LENGTH)} (...)`);
    } else {
      Logger.log(message);
    }
  }
}
