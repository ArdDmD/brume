import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/files')
export class FilesController {
  constructor(private filesService: FilesService) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  create(@UploadedFile() file) {
    return this.filesService.createFile(file);
  }
}
