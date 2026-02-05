import {useEffect, useState} from "react";
import type {UserDummyjsonType} from "../../model/UserTypeModel.ts";
import {getUsers} from "../../services/api.services.ts";
import UserComponent from "./UserComponent.tsx";
import {useSearchParams} from "react-router";


const UsersComponent = () => {

    const [searchParams] = useSearchParams({page: `1`});

    const [users, setUsers] = useState<UserDummyjsonType[]>();

    useEffect(() => {
        const carrentPage = searchParams.get(`page`) || `1`;
        getUsers(carrentPage)
            .then(value => setUsers(value.users))
    }, [searchParams]);



    return (
        <div>
            {
                users?.map(user => <UserComponent key={user.id} item={user} />)
            }

        </div>
    );
};

export default UsersComponent;