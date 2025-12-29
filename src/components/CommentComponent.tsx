import type {CommentModelType} from "../model/CommentModelType.ts";
import type {FC} from "react";


type CommentPropsType = {
    item: CommentModelType
}

const CommentComponent: FC <CommentPropsType> = ({item}) => {
    return (
        <div>

            <h3>{item.postId} - {item.name}</h3>
            <p>{item.body}</p>

        </div>
    );
};

export default CommentComponent;