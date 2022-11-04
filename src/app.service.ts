import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World';
  }
   getHellor(): string {
    return 'Hello World';
  }
}
