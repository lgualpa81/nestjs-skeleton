import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as morgan from 'morgan';

import { AppModule } from './app.module';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));

  const configService = app.get(ConfigService);
  app.enableCors(CORS);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Skeleton Restful API')
    .setDescription('Skeleton API endpoints')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(configService.get('PORT'));
  console.log(`Application running on ${await app.getUrl()}`);
}
bootstrap();
