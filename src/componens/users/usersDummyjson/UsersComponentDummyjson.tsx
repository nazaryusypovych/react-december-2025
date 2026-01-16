import {useEffect, useState} from "react";
import {getUsersDummyjson} from "../../../services/users.api.services.ts";
import type {UserDummyjsonType} from "../../../model/UserDummyjsonType.ts";
import UserComponentDummyjson from "./UserComponentDummyjson.tsx";


const UsersComponentDummyjson = () => {

    const [users, setUsers] = useState <UserDummyjsonType[]>();

    useEffect(() =>{

        getUsersDummyjson()
            .then(data => setUsers(data.users))

    },[])

    if (!users){
        return <div>Завантаження....</div>
    }

    return (
        <div>

            {
                users?.map(user => <UserComponentDummyjson key={user.id} item={user}/>)
            }

        </div>
    );
};

export default UsersComponentDummyjson;