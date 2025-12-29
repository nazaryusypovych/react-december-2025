import type {IProduct} from "../model/ProductModelType.ts";
import type {FC} from "react";


interface IProductProps {
    item: IProduct
}


const ProductComponent: FC <IProductProps> = ({item}) => {
    return (
        <div>

            <h3>{item.title}</h3>
            <img src={item.images} alt={item.title}/>
            <p>{item.description}</p>


        </div>
    );
};

export default ProductComponent;