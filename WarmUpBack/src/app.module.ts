import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { HttpModule } from '@nestjs/axios';
import { NewModule } from './new/new.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Pipexz:yJMxUigewCnQ152V@clusterwarmup.xrbgc.mongodb.net/warmup?retryWrites=true&w=majority'),
    HttpModule,
    NewModule,
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}