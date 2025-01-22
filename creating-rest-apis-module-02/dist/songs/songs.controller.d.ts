import { SongsService } from './songs.service';
export declare class SongsController {
    private SongsService;
    constructor(SongsService: SongsService);
    create(): void;
    findAll(): string[];
    findOne(): string;
    update(): string;
    remove(): string;
}
