import { NestFactory } from '@nestjs/core';
import { Conf as conf } from '@conf/conf';
import { AppModule } from '@app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Register a global perfix for every HTTP route path. 
  // app.setGlobalPrefix('/v1/api')

  await app.listen(conf.PORT)
  console.log(`Static Server is listening on port ${await app.getUrl()}`);
}
bootstrap();
