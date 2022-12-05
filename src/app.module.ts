import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CarModule } from './car/car.module';
import { CliModule } from './cli/cli.module';
import { configOptions } from './config';

@Module({
  imports: [ConfigModule.forRoot(configOptions), CarModule, CliModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
