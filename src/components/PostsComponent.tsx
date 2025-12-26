
import PostComponent from "./PostComponent.tsx";
import {useEffect, useState} from "react";
import type {PostType} from "../model/PostModelType.ts";
import {getPosts} from "./api.service.ts";

const PostsComponent = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    useEffect(()=>{

        getPosts()
            .then(posts => setPosts(posts))


        return () =>{
            console.log(`done`);
        }



    }, []);

    return (
        <div>
            {
                posts.map(post => <PostComponent item={post} key={post.id}/>)
            }

        </div>
    );
};

export default PostsComponent;