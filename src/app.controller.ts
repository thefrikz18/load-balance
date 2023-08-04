import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('domain')
  getServerDomain(@Req() request: Request): any {
    const domain = this.getServerDomainFromRequest(request);
    return {domain};
  }

  private getServerDomainFromRequest(request: Request): string {
    const hostHeader = request.headers['host'];
    const domain = hostHeader?.split(':')[0] || 'Unknown';
    return domain;
  }
}
