import type {userType} from "../../model/UserModel.ts";
import type {FC} from "react";


type UserPops = {
    item: userType
    foo: (item: userType) => void
}

const UserComponet: FC <UserPops> = ({item, foo}) => {
    return (
        <div>
            {item.name} - {item.username}
            <button onClick={()=>{
                foo(item)
            }}>detalies</button>
        </div>
    );
};

export default UserComponet;