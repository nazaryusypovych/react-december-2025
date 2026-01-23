import {Outlet} from "react-router";
import UsersComponet from "../componets/users/UsersComponet.tsx";


const UsersPage = () => {
    return (
        <div>
            UsersPage
            <UsersComponet/>
            <Outlet/>

        </div>
    );
};

export default UsersPage;