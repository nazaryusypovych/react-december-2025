import type {UserDummyjsonType} from "../../models/UserType.ts";
import type {FC} from "react";


type UserPropType = {
    item: UserDummyjsonType
}

const UserComponet: FC <UserPropType> = ({item}) => {
    return (
        <div>
            {item.firstName}, {item.lastName}

        </div>
    );
};

export default UserComponet;