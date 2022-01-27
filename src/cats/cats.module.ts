import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], //모듈은 기본적으로 공급자를 캡슐화 하기때문에 exprot 하지 않으면 삽입x
})
export class CatsModule {}