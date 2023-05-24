import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file): Promise<IFile> {
    try {
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static', 'images');
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      const url = path.join(filePath, fileName);
      fs.writeFileSync(url, file.buffer);
      return {
        name: file.originalname,
        size: file.size,
        mime: file.mimetype,
        url: `/api/images/${fileName}`,
      };
    } catch (e) {
      console.log(e);
      throw new HttpException('Ошибка', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
