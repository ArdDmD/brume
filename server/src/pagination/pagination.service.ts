import { Injectable } from '@nestjs/common';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class PaginationService {
  getPagination(dto: PaginationDto, defaultPerPage = 30) {
    const page = dto.page ? +dto.page : 1;
    const limit = dto.perPage ? +dto.perPage : defaultPerPage;
    const offset = (page - 1) * limit;
    return { limit, offset };
  }
}
