import type {PostType} from "../model/PostModelType.ts";
import type {FC} from "react";


type PostPropsType = {
    item: PostType,
}

const PostComponent: FC <PostPropsType> = ({item}) => {
    return (
        <div>

            <h2>User {item.userId} - {item.title}</h2>
            <p>{item.body}</p>

        </div>
    );
};

export default PostComponent;