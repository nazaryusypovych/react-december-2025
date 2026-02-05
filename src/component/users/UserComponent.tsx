import type {UserDummyjsonType} from "../../model/UserTypeModel.ts";
import type {FC} from "react";


type UserPropsType = {
    item: UserDummyjsonType
}

const UserComponent: FC<UserPropsType> = ({item}) => {
    return (
        <div>
            {item.id}
            {item.firstName}

        </div>
    );
};

export default UserComponent;