import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppExceptionFilter } from './filters/app-exception.filter';
import { PORT } from './shared/env';

(async () => {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AppExceptionFilter());

  await app.listen(PORT);
})();
