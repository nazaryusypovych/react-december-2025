import {Link} from "react-router";


const Menu = () => {
    return (
        <div>

            <ul>
                <li><Link to="/home">Home Page</Link></li>
                <li><Link to="/users">Users Page</Link></li>
                <li><Link to="/posts">Posts Page</Link></li>
            </ul>

        </div>
    );
};

export default Menu;