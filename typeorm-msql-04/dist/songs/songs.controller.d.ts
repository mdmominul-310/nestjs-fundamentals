import { SongsService } from './songs.service';
export declare class SongsController {
    private SongsService;
    constructor(SongsService: SongsService);
    create(): any[];
    findAll(): any[];
    findOne(id: number): string;
    update(): string;
    remove(): string;
}
