import { Module } from '@nestjs/common';
import { FiltersService } from './filters.service';

@Module({
  providers: [FiltersService],
  exports: [FiltersService],
})
export class FiltersModule {}
