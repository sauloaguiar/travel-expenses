import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    console.log(`Nest Web Server start on port : ${port}`);
  });
}

bootstrap().catch((err) => {
  console.log(err);

  process.exit(1);
});
