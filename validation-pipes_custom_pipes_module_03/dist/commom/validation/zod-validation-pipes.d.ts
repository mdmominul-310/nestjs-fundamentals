import { PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';
export declare class ZodValidationPipes implements PipeTransform {
    private schema;
    constructor(schema: ZodSchema);
    transform(value: any): any;
}
