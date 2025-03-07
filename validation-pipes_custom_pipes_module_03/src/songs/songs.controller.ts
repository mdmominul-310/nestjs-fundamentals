import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO, createSongsSchma } from './dto/create-song-dto';
import { ZodValidationPipes } from 'src/commom/validation/zod-validation-pipes';

@Controller('songs')
export class SongsController {
  constructor(private SongsService: SongsService) {}
  @Post()
  @UsePipes(new ZodValidationPipes(createSongsSchma))
  create(@Body() CreateSongDTO: CreateSongDTO) {
    return this.SongsService.create(CreateSongDTO);
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
