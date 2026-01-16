import {useEffect, useState} from "react";
import {getUsersJsonplaceholder} from "../../../services/users.api.services.ts";
import type {UserJsonpiaceholderType} from "../../../model/UserJsonplaceholderType.ts";
import UserComponentJsonplaseholder from "./UserComponentJsonplaseholder.tsx";


const UsersComponentJsonplaseholder = () => {

    const [users, setUsers] = useState <UserJsonpiaceholderType[]>([]);

    useEffect(() =>{

        getUsersJsonplaceholder()
            .then(users => setUsers(users))

    },[])


    return (
        <div>

            {
                users.map(user => <UserComponentJsonplaseholder key={user.id} item={user}/>)
            }

        </div>
    );
};

export default UsersComponentJsonplaseholder;