import type {todoType} from "../model/todosTypeModel.ts";
import type {FC} from "react";


type todoPropsType = {
    item: todoType
}

const TodoComponent: FC <todoPropsType> = ({item}) => {
    return (
        <div>

            {item.userId} -  {item.title}

        </div>
    );
};

export default TodoComponent;