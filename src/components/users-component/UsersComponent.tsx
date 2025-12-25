import {useEffect, useState} from "react";
import type {userType} from "../../model/UserModel.ts";
import UserComponet from "../user-component/UserComponet.tsx";
import {getUsers} from "../../services/api.service.ts";


const UsersComponent = () => {

    const [users, setUsers] = useState<userType[]>([]);

    useEffect(()=>{
        getUsers()
            .then(users => {
                setUsers(users)
            });

        return () =>{
            console.log(`done`);
        }

    }, []);
    
    
    
    return (
        <div>

            {
                users.map((user) => <UserComponet item={user} key={user.id}/>)
            }
            
        </div>
    );
};

export default UsersComponent;