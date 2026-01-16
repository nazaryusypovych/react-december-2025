import type {FC} from "react";
import type {UserDummyjsonType} from "../../../model/UserDummyjsonType.ts";


type UserPropDummyjsonType ={
    item: UserDummyjsonType
};

const UserComponentDummyjson: FC <UserPropDummyjsonType> = ({item}) => {
    return (
        <div>

            {item.firstName} - {item.lastName}

        </div>
    );
};

export default UserComponentDummyjson;