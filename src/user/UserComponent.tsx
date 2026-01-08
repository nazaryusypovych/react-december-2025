import type {FC} from "react";
import type {userType} from "../model/UserModelType.ts";
import {Link, useNavigate} from "react-router-dom";


type userPropsType = {
    item: userType
}


const UserComponent: FC <userPropsType> = ({item}) => {


    const navigate =useNavigate();
    const handleOnclick = () => {
        navigate(`posts/${item.id}`, {state:item});
    }

    return (
        <div>
            <Link to={`details`} state={item}>{item.name}</Link>

            <button onClick={handleOnclick}>go to detailes</button>

        </div>


    );
};

export default UserComponent;