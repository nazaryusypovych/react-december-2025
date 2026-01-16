import type {UserJsonpiaceholderType} from "../../../model/UserJsonplaceholderType.ts";
import type {FC} from "react";


type UserPropJsonpiaceholderType ={
    item: UserJsonpiaceholderType
};

const UserComponentJsonplaseholder: FC <UserPropJsonpiaceholderType> = ({item}) => {
    return (
        <div>

            {item.name} - {item.username}

        </div>
    );
};

export default UserComponentJsonplaseholder;