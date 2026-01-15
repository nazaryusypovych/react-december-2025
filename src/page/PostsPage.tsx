import {Outlet} from "react-router";


const PostsPage = () => {
    return (
        <div>

            <h1>Posts Page</h1>
            <Outlet/>

        </div>
    );
};

export default PostsPage;