"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lowdb_1 = __importDefault(require("lowdb"));
const FileAsync_1 = __importDefault(require("lowdb/adapters/FileAsync"));
const adapter = new FileAsync_1.default('database/db.json');
var db = lowdb_1.default(adapter);
exports.getAllPosts = () => __awaiter(this, void 0, void 0, function* () {
    return yield (yield db).get('posts')
        .value();
});
exports.getPostById = (postId) => __awaiter(this, void 0, void 0, function* () {
    return yield (yield db).get('posts')
        .find({ id: postId })
        .value();
});
exports.createPost = (postContent) => __awaiter(this, void 0, void 0, function* () {
    return yield (yield db).get('posts')
        .push(postContent)
        .last()
        .assign({ id: Date.now().toString() })
        .write();
});
//# sourceMappingURL=postsAdapter.js.map