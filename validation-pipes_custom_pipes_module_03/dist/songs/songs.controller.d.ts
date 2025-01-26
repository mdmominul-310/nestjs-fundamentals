import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
export declare class SongsController {
    private SongsService;
    constructor(SongsService: SongsService);
    create(CreateSongDTO: CreateSongDTO): any[];
    findAll(): any[];
    findOne(id: number): string;
    update(): string;
    remove(): string;
}
