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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const postsAdapter_1 = require("./adapters/postsAdapter");
const app = express_1.default();
app.use(body_parser_1.default.json());
app.get('/posts', (_req, res) => __awaiter(this, void 0, void 0, function* () {
    const posts = yield postsAdapter_1.getAllPosts();
    res.send(posts);
}));
app.get('/posts/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const post = yield postsAdapter_1.getPostById(req.params.id);
    res.send(post);
}));
app.post('/posts', (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log(req.body);
    res.send(yield postsAdapter_1.createPost(req.body));
}));
app.listen(5000, () => console.log('listening on port 5000'));
//# sourceMappingURL=index.js.map