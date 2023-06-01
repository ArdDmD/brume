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
          acc[`$${key}$`] = { [Op[val.filterType]]: `${val.value}` };
          return acc;
        },
        {},
      );
    }
    return { ...filters };
  }
}
