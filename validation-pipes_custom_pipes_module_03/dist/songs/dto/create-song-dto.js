"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSongsSchma = void 0;
const zod_1 = require("zod");
exports.createSongsSchma = zod_1.z
    .object({
    title: zod_1.z.string().nonempty(),
    artist: zod_1.z.string().nonempty(),
    duration: zod_1.z.string().nonempty(),
    releaseDate: zod_1.z.string().nonempty(),
})
    .required();
//# sourceMappingURL=create-song-dto.js.map