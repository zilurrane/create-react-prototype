export const getPostById = async (db: any, postId: number) => {
    console.log(`getPostById(${postId})`)
    return await db.get('posts')
        .find({ id: postId })
        .value()
}
export const createPost = async (db: any, postContent: any) => {
    console.log(`createPost(${JSON.stringify(postContent)})`)
    return await db.get('posts')
        .push(postContent)
        .last()
        .assign({ id: Date.now().toString() })
        .write()
}