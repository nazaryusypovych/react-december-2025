import type {IObjectDummy} from "../model/ProductModelType.ts";


const getProducts = async () => {
    const object: IObjectDummy = await fetch('https://dummyjson.com/products')
        .then(res => res.json())

    return object.products;
}

export {
    getProducts

}