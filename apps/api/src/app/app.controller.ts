import { Controller, Get } from '@nestjs/common';

import { Message } from '@f-society/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): string {
    return this.appService.getData();
  }
}
