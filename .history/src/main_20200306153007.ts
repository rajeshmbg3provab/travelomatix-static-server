import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Conf as conf } from './conf/conf';
import { async } from 'rxjs/internal/scheduler/async';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Register a global perfix for every HTTP route path. 
  // app.setGlobalPrefix('/v1/api')
  await app.listen(conf.PORT, async () => {
    console.log(`Static Server is listening at port ${conf.PORT} on ${ await app.getUrl()}` );
  });
}
bootstrap();
