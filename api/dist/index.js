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
const lowdb_1 = __importDefault(require("lowdb"));
const FileAsync_1 = __importDefault(require("lowdb/adapters/FileAsync"));
const postsAdapter_1 = require("./adapters/postsAdapter");
const app = express_1.default();
app.use(body_parser_1.default.json());
const adapter = new FileAsync_1.default('database/db.json');
lowdb_1.default(adapter)
    .then(db => {
    app.get('/posts/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const post = yield postsAdapter_1.getPostById(db, req.params.id);
        res.send(post);
    }));
    app.post('/posts', (req, res) => __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        res.send(yield postsAdapter_1.createPost(db, req.body));
        // db.get('posts')
        //     .push(req.body)
        //     .last()
        //     .assign({ id: Date.now().toString() })
        //     .write()
        //     .then(post => res.send(post))
    }));
    return db.defaults({ posts: [] }).write();
})
    .then(() => {
    app.listen(5000, () => console.log('listening on port 5000'));
});
//# sourceMappingURL=index.js.map