import type {CartDummyjsonType} from "../../model/CardType.ts";
import type {FC} from "react";


type CartPropType ={
    item: CartDummyjsonType
}

const CartComponent: FC <CartPropType> = ({item}) => {
    return (
        <div>
            {item.total}

        </div>
    );
};

export default CartComponent;