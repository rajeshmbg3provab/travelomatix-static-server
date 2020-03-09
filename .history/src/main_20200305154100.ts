import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Conf as conf } from './conf/conf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(conf.PORT);
}
bootstrap();
