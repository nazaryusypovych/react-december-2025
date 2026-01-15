import {Outlet} from "react-router";


const UsersPage = () => {
    return (
        <div>

            <h1>Users Page</h1>
            <Outlet/>

        </div>
    );
};

export default UsersPage;