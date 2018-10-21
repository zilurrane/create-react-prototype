import express from 'express';
import bodyParser from 'body-parser';
import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import { getPostById, createPost } from './adapters/postsAdapter';

const app = express()
app.use(bodyParser.json())

const adapter = new FileAsync('database/db.json')
low(adapter)
    .then(db => {

        app.get('/posts/:id', async (req, res) => {
            const post = await getPostById(db, req.params.id)
            res.send(post)
        })

        app.post('/posts', async (req, res) => {
            console.log(req.body)
            res.send(await createPost(db, req.body))
        })

        return db.defaults({ posts: [] }).write()
    })
    .then(() => {
        app.listen(5000, () => console.log('listening on port 5000'))
    })