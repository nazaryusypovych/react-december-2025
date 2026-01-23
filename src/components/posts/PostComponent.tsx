import type {PostDummyjsonType} from "../../models/PostType.ts";
import type {FC} from "react";


type PostPropType = {
    item: PostDummyjsonType
}

const PostComponent: FC <PostPropType> = ({item}) => {
    return (
        <div>
            {item.title}
            {item.body}


        </div>
    );
};

export default PostComponent;