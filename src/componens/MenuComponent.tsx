import {Link} from "react-router";


const MenuComponent = () => {
    return (
        <div>


            <ul>
                <li><Link to="/main">Main Page</Link></li>
                <li><Link to="/users">Users</Link>
                    <ul>
                        <li><Link to="/users/jsonplaceholder">Users-jsonplaceholder</Link></li>
                        <li><Link to="/users/dummyjson">Users-dummyjson</Link></li>
                    </ul>

                </li>
                <li><Link to="/posts">Posts</Link>
                    <ul>
                        <li><Link to="/posts/jsonplaceholder">Posts-jsonplaceholder</Link></li>
                        <li><Link to="/posts/dummyjson">Posts-dummyjson</Link></li>
                    </ul>

                </li>
                <li><Link to="/comments">Comments</Link>
                    <ul>
                        <li><Link to="/comments/dummyjson">Comments-dummyjson</Link></li>
                    </ul>

                </li>

            </ul>

        </div>
    );
};

export default MenuComponent;