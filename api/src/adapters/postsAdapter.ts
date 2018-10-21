import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';

const adapter = new FileAsync('database/db.json')
var db = low(adapter)

export const getAllPosts = async () => {
    return await (await db).get('posts')
        .value()
}

export const getPostById = async (postId: number) => {
    return await (await db).get('posts')
        .find({ id: postId })
        .value()
}
export const createPost = async (postContent: any) => {
    return await (await db).get('posts')
        .push(postContent)
        .last()
        .assign({ id: Date.now().toString() })
        .write()
}