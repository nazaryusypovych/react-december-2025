import {useEffect, useState} from "react";
import {getPostsDummyjson} from "../../services/api.services.ts";
import type {PostDummyjsonType} from "../../models/PostType.ts";
import PostComponent from "./PostComponent.tsx";


const PostsComponent = () => {
    const [posts, setPosts] = useState <PostDummyjsonType[]>();

    useEffect(() => {

        getPostsDummyjson()
            .then(value => setPosts(value.posts))

    }, []);


    return (
        <div>
            {
                posts?.map(post => <PostComponent key={post.id} item={post}/>)
            }

        </div>
    );
};

export default PostsComponent;