import { CommandModule } from 'nestjs-command';
import { Module } from '@nestjs/common';

import { CarCommand } from './command/car.command';
import { CarModule } from 'src/car/car.module';

@Module({
  imports: [CommandModule, CarModule],
  controllers: [],
  providers: [CarCommand],
})
export class CliModule {}
