import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { NewController } from './new.controller';
import { NewModule } from './new.module';
import { New } from './new.model'
import { New as NewInterface } from './interfaces/new.interface';
import { NewService } from './new.service';

describe('NewController', () => {
  let controller: NewController;
  let newService: NewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NewModule],
    })
    .overrideProvider(getModelToken(New.name))
    .useValue(jest.fn())
    .compile();

    controller = module.get<NewController>(NewController);
    newService = module.get<NewService>(NewService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getNews', () => {
    it('Must be return an Array with all the News on the DB', async () => {
      jest.spyOn(newService, 'getNews').mockImplementation(() => Promise.resolve([{
        story_id: 30009714,
        created_at: '2022-01-20T19:51:32.000+00:00',
        title: null,
        url: null,
        author: "nvegater",
        story_title: "Crypto.com accounts had unauthorized withdrawals",
        story_url: "https://crypto.com/product-news/crypto-com-security-report-next-steps",
        status: true
      }] as unknown as Promise<NewInterface[]>))
      const result = await controller.getNews()
      expect(result[0] instanceof New)
    })
  })

  describe('updateNew', () => {
    it('Must be return an updated New with status turned to false', async () => {
      jest.spyOn(newService, 'updateNew').mockImplementation(() => Promise.resolve({
        story_id: 30009714,
        created_at: '2022-01-20T19:51:32.000+00:00',
        title: null,
        url: null,
        author: "nvegater",
        story_title: "Crypto.com accounts had unauthorized withdrawals",
        story_url: "https://crypto.com/product-news/crypto-com-security-report-next-steps",
        status: false
      } as unknown as Promise<NewInterface>))
      const result = await controller.updateNew('30009714')
      expect(result instanceof New)
      expect(result.status).toEqual(false)
    })    
  })

});
