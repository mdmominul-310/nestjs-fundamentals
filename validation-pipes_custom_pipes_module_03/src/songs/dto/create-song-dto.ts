// import {
//   IsDateString,
//   IsMilitaryTime,
//   IsNotEmpty,
//   IsString,
// } from 'class-validator';

import { z } from 'zod';

// export class CreateSongDTO {
//   @IsString()
//   @IsNotEmpty()
//   readonly title: string;
//   @IsString()
//   @IsNotEmpty()
//   readonly artist: string;
//   @IsString()
//   @IsNotEmpty()
//   @IsMilitaryTime()
//   readonly duration: number;
//   @IsString()
//   @IsNotEmpty()
//   @IsDateString()
//   readonly releaseDate: Date;
// }

export const createSongsSchma = z
  .object({
    title: z.string().nonempty(),
    artist: z.string().nonempty(),
    duration: z.string().nonempty(),
    releaseDate: z.string().nonempty(),
  })
  .required();

export type CreateSongDTO = z.infer<typeof createSongsSchma>;
