import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { New } from './new.model';
import { NewModule } from './new.module';
import { New as NewInterface } from './interfaces/new.interface';
import { NewService } from './new.service';
import { CreateNewDTO } from './dto/new.dto';

describe('NewService', () => {
  let service: NewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NewModule],
    })
    .overrideProvider(getModelToken(New.name))
    .useValue(jest.fn())
    .compile();

    service = module.get<NewService>(NewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Testing new.service', () => {
    it('getNews: Must be return an Array with all the News on the DB', async () => {
      jest.spyOn(service, 'getNews').mockImplementation(() => Promise.resolve([{
        story_id: 30009714,
        created_at: new Date('2022-01-20T19:51:32.000+00:00'),
        title: null,
        url: null,
        author: "nvegater",
        story_title: "Crypto.com accounts had unauthorized withdrawals",
        story_url: "https://crypto.com/product-news/crypto-com-security-report-next-steps",
        status: true
      }] as unknown as Promise<NewInterface[]>))
      const result = await service.getNews()
      expect(result[0] instanceof New)
    })

    it('getNew: Must be return a News searched by an id in the DB', async () => {
      jest.spyOn(service, 'getNew').mockImplementation(() => Promise.resolve({
        story_id: 30009714,
        created_at: new Date('2022-01-20T19:51:32.000+00:00'),
        title: null,
        url: null,
        author: "nvegater",
        story_title: "Crypto.com accounts had unauthorized withdrawals",
        story_url: "https://crypto.com/product-news/crypto-com-security-report-next-steps",
        status: true
      } as unknown as Promise<NewInterface>))
      const result = await service.getNew('30009714')
      expect(result[0] instanceof New)
    })

    it('createNew: Must be create a News and save it on the DB', async () => {
      jest.spyOn(service, 'createNew').mockImplementation(() => Promise.resolve({
        story_id: 30009714,
        created_at: '2022-01-20T19:51:32.000+00:00',
        title: null,
        url: null,
        author: "nvegater",
        story_title: "Crypto.com accounts had unauthorized withdrawals",
        story_url: "https://crypto.com/product-news/crypto-com-security-report-next-steps",
        status: true
      } as unknown as Promise<NewInterface>))
      const newCreated = await service.createNew({
        story_id: 30009714,
        created_at: new Date('2022-01-20T19:51:32.000+00:00'),
        title: null,
        url: null,
        author: "nvegater",
        story_title: "Crypto.com accounts had unauthorized withdrawals",
        story_url: "https://crypto.com/product-news/crypto-com-security-report-next-steps",
        status: true
      } as unknown as CreateNewDTO)
      expect(newCreated instanceof New)
    })

    it('Must be return an updated New with status turned to false', async () => {
      jest.spyOn(service, 'updateNew').mockImplementation(() => Promise.resolve({
        story_id: 30009714,
        created_at: '2022-01-20T19:51:32.000+00:00',
        title: null,
        url: null,
        author: "nvegater",
        story_title: "Crypto.com accounts had unauthorized withdrawals",
        story_url: "https://crypto.com/product-news/crypto-com-security-report-next-steps",
        status: false
      } as unknown as Promise<NewInterface>))
      const result = await service.updateNew('30009714')
      expect(result instanceof New)
      expect(result.status).toEqual(false)
    })  

    it('readApi: Must be return an Array with all the News on the API', async () => {
      jest.spyOn(service, 'readApi').mockImplementation(() => Promise.resolve([{
        story_id: 30009714,
        created_at: new Date('2022-01-20T19:51:32.000+00:00'),
        title: null,
        url: null,
        author: "nvegater",
        story_title: "Crypto.com accounts had unauthorized withdrawals",
        story_url: "https://crypto.com/product-news/crypto-com-security-report-next-steps",
        status: true
      }] as unknown as Promise<NewInterface[]>))
      const result = await service.readApi()
      expect(result[0] instanceof New)
    })    
  })
});
