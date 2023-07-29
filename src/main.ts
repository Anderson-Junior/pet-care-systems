import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  // Obtém a porta definida no ambiente ou usa a porta 3000 por padrão
  const port = 3000;
  await app.listen(port);

  // Exibe a URL e a porta em que a aplicação está rodando
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
