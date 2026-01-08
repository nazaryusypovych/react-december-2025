import {useEffect, useState} from "react";
import type {userType} from "../model/UserModelType.ts";
import UserComponent from "../user/UserComponent.tsx";
import {userServices} from "../services/api.services.ts";


const UsersComponent = () => {
    const [users, setUsers] = useState <userType[]>([]);

    useEffect(() =>{
        userServices.getUsers().then((users) => {setUsers(users)});


    }, [])




    return (
        <div>

            {
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }

        </div>
    );
};

export default UsersComponent;