

const baseUrl = 'https://jsonplaceholder.typicode.com';


export const url = {
    user: {
        allUser: baseUrl + `/users`,

        byId: (id: number) =>{
            return baseUrl + `/users` + id
        }

    },

    post: {
        allPosts: baseUrl + `/posts`,
        byId: (id:number) =>{
            return baseUrl + `/posts` + id
        },
        userPostsById: (id:number) =>{
            return baseUrl + `/posts?userId=` + id
        }
    }
}