import { Injectable } from '@nestjs/common';
import { Message } from '@f-society/api-interfaces';

@Injectable()
export class AppService {
  getData() {
    return 'Welcome to api!' ;
  }
}
