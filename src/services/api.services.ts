import type {AllInformUserDummyjsonType} from "../models/UserType.ts";
import type {AllInformPostDummyjsonType} from "../models/PostType.ts";

const baseUrleDummyjson = `https://dummyjson.com`;

export const getUsersDummyjson = async (): Promise <AllInformUserDummyjsonType> => {
    return await fetch(`${baseUrleDummyjson}` + `/users`)
        .then(res => res.json())
};

export const getPostsDummyjson = async (): Promise <AllInformPostDummyjsonType> => {
    return await fetch(`${baseUrleDummyjson}` + `/posts`)
        .then(res => res.json())
};