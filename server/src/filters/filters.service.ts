import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';

@Injectable()
export class FiltersService {
  getFilters(dto: IFilter) {
    let filters = {};
    const searchValue = dto;
    if (searchValue) {
      filters = Object.entries(searchValue).reduce(
        (acc: object, [key, val]): object => {
          const field = key.split('.').length === 1 ? key : `$${key}$`;
          const value =
            val.filterType === 'like' ? `%${val.value}%` : val.value;
          acc[field] = {
            [Op[val.filterType]]: value,
          };
          return acc;
        },
        {},
      );
    }
    console.log('rez', filters);
    return { ...filters };
  }
}
