import type {CarType} from "../model/CarsTypeModel.ts";
import type {FC} from "react";

type carPropsType = {
    item: CarType
}


const CarComponent: FC <carPropsType> = ({item}) => {
    return (
        <div>

            {item.brand} - {item.price}

        </div>
    );
};

export default CarComponent;