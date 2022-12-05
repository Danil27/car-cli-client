import { NestFactory } from '@nestjs/core';
import { CommandModule, CommandService } from 'nestjs-command';

import { CliModule } from 'src/cli/cli.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.createApplicationContext(CliModule);

  try {
    await app.select(CommandModule).get(CommandService).exec();
    await app.close();
  } catch (e) {
    await app.close();
  } finally {
    process.exit(0);
  }
}
bootstrap();
