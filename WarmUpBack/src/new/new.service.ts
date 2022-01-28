import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { New } from './interfaces/new.interface';
import { CreateNewDTO } from './dto/new.dto';
import { HttpService } from '@nestjs/axios';
import { Cron, CronExpression } from '@nestjs/schedule';


@Injectable()
export class NewService {

    BASE_URL = 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs'

    constructor(@InjectModel('New') private readonly newModel: Model<New>, private httpService: HttpService) {}

    async getNews(): Promise<New[]>{
        const news = await this.newModel.find()
        return news
    }

    async getNew(newID: string): Promise<New>{
        const newFinded = await this.newModel.findOne({story_id: parseInt(newID)}).exec()
        return newFinded
    }

    async createNew(createNewDTO: CreateNewDTO): Promise<New>{
        const newCreated = new this.newModel(createNewDTO)
        return await newCreated.save()
    }

    async updateNew(newID: string): Promise<New>{
        const newUpdated = await this.newModel.findOneAndUpdate({story_id: parseInt(newID)}, {status: false}, {new: true})
        return newUpdated
    }

    async readApi(): Promise<New[]>{
        const {data} = await this.httpService.get(this.BASE_URL).toPromise()
        const news = data['hits']
        const fullData = news.map(element => {
            const item: CreateNewDTO = {
                created_at: element.created_at,
                title: element.title,
                url: element.url,
                author: element.author,
                story_id: element.story_id,
                story_title: element.story_title,
                story_url: element.story_url,
                status: true
            }
            return item
        });
        return fullData
    }

    private readonly logger = new Logger(NewService.name)

    @Cron(CronExpression.EVERY_HOUR)
    async sendData(){
        const data = await this.readApi()
        for(let i=0; i < data.length; i = i + 1){
            if(data[i].story_id != null){
                const element = await this.getNew(data[i].story_id.toString())
                if(!element){
                    await this.createNew(data[i])    
                }
            }
        }
        this.logger.debug("'MANDANDO DATOS A MONGO'")
    }
}
