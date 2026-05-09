import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('DB URL:', process.env.DATABASE_URL); // 👈 DEBUG IMPORTANTE

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Categories API')
    .setDescription('REST API for managing categories')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);

  console.log('Servidor corriendo en http://localhost:3000'); // 👈 CONFIRMACIÓN
}
bootstrap();