import type {UserJsonpiaceholderType} from "../model/UserJsonplaceholderType.ts";
import type {AllInformUserDummyjsonType} from "../model/UserDummyjsonType.ts";

const baseUrleJsonplaceholder = `https://jsonplaceholder.typicode.com`;
const baseUrleDummyjson = `https://dummyjson.com`;





export const getUsersJsonplaceholder = async (): Promise <UserJsonpiaceholderType[]> => {
    return await fetch(`${baseUrleJsonplaceholder}` + `/users`)
        .then(res => res.json())
};

export const getUsersDummyjson = async (): Promise <AllInformUserDummyjsonType> => {
    return await fetch(`${baseUrleDummyjson}` + `/users`)
        .then(res => res.json())
};

