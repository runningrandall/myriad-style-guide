import { Injectable } from '@angular/core';
@Injectable()
export class LoggerService {
  log(msg: string) {
    if (window.console){
      console.log(msg);
    }
  }
  error(msg: string) {
    if (window.console){
      console.error(msg);
    }
  }
}
