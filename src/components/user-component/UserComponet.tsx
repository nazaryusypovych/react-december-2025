import type {userType} from "../../model/UserModel.ts";
import type {FC} from "react";


type UserPops = {
    item: userType
}

const UserComponet: FC <UserPops> = ({item}) => {
    return (
        <div>
            {item.name} - {item.username}
        </div>
    );
};

export default UserComponet;