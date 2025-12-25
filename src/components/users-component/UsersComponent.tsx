import {useEffect, useState} from "react";
import type {userType} from "../../model/UserModel.ts";
import UserComponet from "../user-component/UserComponet.tsx";
import {getUsers} from "../../services/api.service.ts";


const UsersComponent = () => {

    const [users, setUsers] = useState<userType[]>([]);
    const [item, setItem] = useState<userType | null>(null);

    useEffect(()=>{
        getUsers()
            .then(users => {
                setUsers(users)
            });

        return () =>{
            console.log(`done`);
        }

    }, []);
    
    const foo = (item: userType) =>{
        setItem(item);
    }
    
    return (
        <div>

            {
                item && <div>{JSON.stringify(item)}</div>
            }

            {
                users.map((user) => <UserComponet foo={foo} item={user} key={user.id}/>)
            }
            
        </div>
    );
};

export default UsersComponent;