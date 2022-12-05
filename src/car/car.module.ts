import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { CarService } from './service/car.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [],
  providers: [CarService],
  exports: [CarService],
})
export class CarModule {}
