"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodValidationPipes = void 0;
const common_1 = require("@nestjs/common");
class ZodValidationPipes {
    constructor(schema) {
        this.schema = schema;
    }
    transform(value) {
        try {
            this.schema.parse(value);
            return value;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.errors);
        }
    }
}
exports.ZodValidationPipes = ZodValidationPipes;
//# sourceMappingURL=zod-validation-pipes.js.map