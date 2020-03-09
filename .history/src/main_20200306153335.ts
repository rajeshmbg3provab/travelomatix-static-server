import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Conf as conf } from './conf/conf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Register a global perfix for every HTTP route path. 
  // app.setGlobalPrefix('/v1/api')
  await app.listen(conf.PORT, () => {
    console.log(`Static Server is listening at port ${conf.PORT}`)});
  console.log(`on ${await app.getUrl()}`);
}
bootstrap();
