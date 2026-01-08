import {useLocation} from "react-router-dom";
import type {userType} from "../model/UserModelType.ts";






const UsersDetailsPage = () => {

    const {state} = useLocation();

    const user = state as userType;



    return (
        <div>

            {user.email}

        </div>
    );
};

export default UsersDetailsPage;