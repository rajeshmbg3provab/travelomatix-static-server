import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Conf as conf } from './conf/conf';
import { async } from 'rxjs/internal/scheduler/async';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Register a global perfix for every HTTP route path. 
  // app.setGlobalPrefix('/v1/api')
  await app.listen(conf.PORT, () => {
    console.log(`Static Server is listening at port ${conf.PORT} on ${ app.getUrl().then (ip => console.log(ip))}` );
  });
}
bootstrap();
