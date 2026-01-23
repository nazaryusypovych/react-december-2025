import {useEffect, useState} from "react";
import type {UserDummyjsonType} from "../../model/UserType.ts";
import {getUsersDummyjson} from "../../services/api.services.ts";
import UserComponent from "./UserComponent.tsx";


const UsersComponet = () => {

    const [users, setUsers] = useState <UserDummyjsonType[]>()

    useEffect(() => {
        getUsersDummyjson().then(value => setUsers(value.users))
    }, []);
    
    
    return (
        <div>

            {
                users?.map(user => <UserComponent key={user.id} item={user}/>)
            }
            
        </div>
    );
};

export default UsersComponet;