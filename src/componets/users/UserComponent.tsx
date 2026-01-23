import type {UserDummyjsonType} from "../../model/UserType.ts";
import type {FC} from "react";
import {useNavigate} from "react-router";


type UserPropsType ={
    item: UserDummyjsonType
}

const UserComponent: FC <UserPropsType> = ({item}) => {
    const navigation = useNavigate();

    const OnClickButtonNavigation = () => {
        navigation(`/users/` + item.id + `/carts`);
    }



    return (
        <div>
            {item.lastName} {item.firstName}
            <button onClick={OnClickButtonNavigation}>more information</button>

        </div>
    );
};

export default UserComponent;