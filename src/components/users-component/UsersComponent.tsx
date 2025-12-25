import {useEffect, useState} from "react";
import type {userType} from "../../model/UserModel.ts";
import UserComponet from "../user-component/UserComponet.tsx";


const UsersComponent = () => {

    const [users, setUsers] = useState<userType[]>([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
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