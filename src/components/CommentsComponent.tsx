import {useEffect, useState} from "react";
import CommentComponent from "./CommentComponent.tsx";
import type {CommentModelType} from "../model/CommentModelType.ts";
import {getComments} from "./api.service.ts";


const CommentsComponent = () => {

    const [comments, setComments] = useState <CommentModelType[]>([]);
    useEffect(() => {

        async function fetchComments(){
            const allComments = await getComments();
            setComments(allComments)
        }

        fetchComments();


        // getComments()
        //     .then(comments => setComments(comments));

        return () =>{
            console.log(`done`);
        }
    },[])


    return (
        <div>

            {
                comments.map(comment => <CommentComponent item={comment} key={comment.id}/>)
            }

        </div>
    );
};

export default CommentsComponent;