import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as firebaseAdmin from 'firebase-admin';
import { firebaseConfig } from './firebase.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  firebaseAdmin.initializeApp(firebaseConfig);
  await app.listen(3000);
}
bootstrap();
