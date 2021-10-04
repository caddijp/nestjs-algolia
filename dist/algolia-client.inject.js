"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectAlgoliaClient = void 0;
const common_1 = require("@nestjs/common");
const algolia_constants_1 = require("./algolia.constants");
function InjectAlgoliaClient() {
    return (0, common_1.Inject)(algolia_constants_1.ALGOLIA_CLIENT);
}
exports.InjectAlgoliaClient = InjectAlgoliaClient;
