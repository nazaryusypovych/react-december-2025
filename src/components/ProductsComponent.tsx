import {useEffect, useState} from "react";
import type {IProduct} from "../model/ProductModelType.ts";
import {getProducts} from "./api.services.ts";
import ProductComponent from "./ProductComponent.tsx";


const ProductsComponent = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() =>{
        // fetch('https://dummyjson.com/products')
        //     .then(res => res.json())
        getProducts()
            .then(products => setProducts(products));



        return ()=>{
            console.log(`done`);
        }
    }, [])

    return (
        <div>


            {
                products.map(product => <ProductComponent item={product} key={product.id}/>)
            }

        </div>
    );
};

export default ProductsComponent;