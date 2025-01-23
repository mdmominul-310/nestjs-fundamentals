import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private SongsService: SongsService) {}
  @Post()
  create() {
    return this.SongsService.create('sons 1');
  }
  @Get()
  findAll() {
    try {
      throw new HttpException(
        {
          status: 500,
          error: 'This is a custom message',
        },
        500,
      );

      return this.SongsService.findAll();
    } catch {
      throw new HttpException(
        {
          status: 500,
          error: 'This is a custom message',
        },
        500,
      );
    }
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): string {
    return 'This action returns a song' + id;
  }
  @Put(':id')
  update(): string {
    return 'This action updates a song';
  }
  @Delete(':id')
  remove(): string {
    return 'This action removes a song';
  }
}
