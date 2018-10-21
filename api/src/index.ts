import express from 'express';
import bodyParser from 'body-parser';
import { getPostById, createPost, getAllPosts } from './adapters/postsAdapter';

const app = express()
app.use(bodyParser.json())

app.get('/posts', async (_req, res) => {
    const posts = await getAllPosts()
    res.send(posts)
})

app.get('/posts/:id', async (req, res) => {
    const post = await getPostById(req.params.id)
    res.send(post)
})

app.post('/posts', async (req, res) => {
    console.log(req.body)
    res.send(await createPost(req.body))
})

app.listen(5000, () => console.log('listening on port 5000'))
