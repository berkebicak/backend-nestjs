import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LibsModule } from 'libs/libs.module';
import enviroment from 'tools/enviroment/enviroment';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule,
    LibsModule,
    MongooseModule.forRoot(enviroment.mongoUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
