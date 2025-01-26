import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipes implements PipeTransform {
  constructor(private schema: ZodSchema) {}
  transform(value: any) {
    try {
      this.schema.parse(value);
      return value;
    } catch (error) {
      throw new BadRequestException(error.errors);
    }
  }
}
