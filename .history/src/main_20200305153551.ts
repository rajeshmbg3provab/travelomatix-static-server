import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Conf } from './conf/conf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Conf.PORT);
}
bootstrap();
