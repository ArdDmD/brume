import { Injectable } from '@nestjs/common';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class PaginationService {
  getPagination(dto: PaginationDto, defaultPerPage = 30) {
    const limit = +dto.limit || defaultPerPage;
    const offset = +dto.offset || 0;
    return { limit, offset };
  }
}
