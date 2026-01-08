import {type FC, useEffect, useState} from "react";
import type {postType} from "../model/PostModelType.ts";
import {postServices} from "../services/api.services.ts";


type PostsPropsType = {
    userId: string
}



const PostsComponent: FC<PostsPropsType> = ({userId}) => {

    const [userPosts, setUserPosts] = useState <postType[]>([])


    useEffect(() =>{
        postServices.getAllPostsUserById(+userId)
            .then((userPosts) => setUserPosts(userPosts))
    }, [userId]);


    return (
        <div>

            {
                userPosts.map(userPost => <div key={userPost.id}>{userPost.title}</div>)
            }

        </div>
    );
};

export default PostsComponent;