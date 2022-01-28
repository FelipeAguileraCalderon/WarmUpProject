import { Module } from '@nestjs/common';
import { NewController } from './new.controller';
import { NewService } from './new.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NewSchema } from './schemas/new.schema';
import { HttpModule} from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'New', schema: NewSchema}
    ]),
    HttpModule,
    ScheduleModule.forRoot()
  ],
  controllers: [NewController],
  providers: [NewService]
})
export class NewModule {}
