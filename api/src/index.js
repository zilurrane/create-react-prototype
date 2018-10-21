const express = require('express')
const bodyParser = require('body-parser')
const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

const app = express()
app.use(bodyParser.json())

const adapter = new FileAsync('database/db.json')
low(adapter)
    .then(db => {

        app.get('/posts/:id', (req, res) => {
            const post = db.get('posts')
                .find({ id: req.params.id })
                .value()

            res.send(post)
        })

        app.post('/posts', (req, res) => {
            db.get('posts')
                .push(req.body)
                .last()
                .assign({ id: Date.now().toString() })
                .write()
                .then(post => res.send(post))
        })

        return db.defaults({ posts: [] }).write()
    })
    .then(() => {
        app.listen(5000, () => console.log('listening on port 5000'))
    })