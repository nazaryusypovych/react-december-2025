import type {userType} from "../model/UserModelType.ts";
import {url} from "../constants/urls.ts";
import type {PostType} from "../model/PostModelType.ts";




export const userServices = {
    getUsers: async ():Promise<userType[]> =>{
        return await fetch(url.user.allUser)
            .then(response => response.json())
    },

    getUser: async (id: number) =>{
        return await fetch(url.user.byId(id))
            .then(response => response.json())
    }
}

export const postServices = {

    getAllPostsUserById: async (id:number):Promise<PostType[]> =>{
        return await fetch(url.post.userPostsById(id))
            .then(response => response.json())
    }
}