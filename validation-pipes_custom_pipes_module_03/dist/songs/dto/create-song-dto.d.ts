import { z } from 'zod';
export declare const createSongsSchma: z.ZodObject<{
    title: z.ZodString;
    artist: z.ZodString;
    duration: z.ZodString;
    releaseDate: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title?: string;
    artist?: string;
    duration?: string;
    releaseDate?: string;
}, {
    title?: string;
    artist?: string;
    duration?: string;
    releaseDate?: string;
}>;
export type CreateSongDTO = z.infer<typeof createSongsSchma>;
