import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { db_url } from './config/database.config';

@Module({
  imports: [UserModule,
    MongooseModule.forRoot(
    db_url
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
