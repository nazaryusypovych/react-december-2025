import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {AllInformCartDummyjsonType, CartDummyjsonType} from "../../model/CardType.ts";
import CartComponent from "./CartComponent.tsx";


const CartsComponent = () => {
    const {id} = useParams();
    console.log(id)

    const [carts, setCarts] = useState <CartDummyjsonType[]>();

    useEffect( () => {
        const users = async () => {
            const response = await fetch('https://dummyjson.com/carts/user/' + id)
            const data: AllInformCartDummyjsonType = await response.json()
            setCarts(data.carts)

            // await fetch('https://dummyjson.com/carts/user/' + id)
            //     .then(res => res.json())
            //     .then((value: AllInformCartDummyjsonType) => setCarts(value.cards))
            //
            // console.log(carts)
        }
        users()
    },[id]);


    return (
        <div>

            {
                carts?.map(cart => <CartComponent key={cart.id} item={cart}/>)
            }

        </div>
    );
};

export default CartsComponent;