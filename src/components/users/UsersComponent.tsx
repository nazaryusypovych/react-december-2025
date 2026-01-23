import {useEffect, useState} from "react";
import type {UserDummyjsonType} from "../../models/UserType.ts";
import {getUsersDummyjson} from "../../services/api.services.ts";
import UserComponet from "./UserComponet.tsx";


const UsersComponent = () => {
    const [users, setUsers] = useState <UserDummyjsonType[]>();

    useEffect(() => {

        getUsersDummyjson()
            .then(value => setUsers(value.users))

    }, []);



    return (
        <div>

            {
                users?.map (user => <UserComponet key={user.id} item={user}/>)
            }

        </div>
    );
};

export default UsersComponent;