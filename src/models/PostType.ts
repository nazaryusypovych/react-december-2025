

type ReactionsPosType = {
    likes: number,
    dislikes: number
}


export type PostDummyjsonType = {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: ReactionsPosType,
    views: number,
    userId: number
}


export type AllInformPostDummyjsonType = {
    posts: PostDummyjsonType[],
    total: number,
    skip: number,
    limit: number
}