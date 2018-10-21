"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostById = (db, postId) => __awaiter(this, void 0, void 0, function* () {
    console.log(`getPostById(${postId})`);
    return yield db.get('posts')
        .find({ id: postId })
        .value();
});
exports.createPost = (db, postContent) => __awaiter(this, void 0, void 0, function* () {
    console.log(`createPost(${JSON.stringify(postContent)})`);
    return yield db.get('posts')
        .push(postContent)
        .last()
        .assign({ id: Date.now().toString() })
        .write();
});
//# sourceMappingURL=postsAdapter.js.map