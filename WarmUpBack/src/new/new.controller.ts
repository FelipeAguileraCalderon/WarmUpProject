import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateNewDTO } from './dto/new.dto';
import { NewService } from './new.service';
import { New } from './interfaces/new.interface';

@Controller('new')
export class NewController {

    constructor(private newService: NewService){}

    @Get('/')
    async getNews(): Promise<New[]>{
        const news = await this.newService.getNews()
        return news
    }

    @Put('/update/:id')
    async updateNew(@Param('id') id: string): Promise<New>{
        const data = await this.newService.updateNew(id)
        return data
    }

}