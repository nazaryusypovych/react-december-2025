import type {AllInformUserDummyjsonType} from "../model/UserType.ts";

const baseUrleDummyjson = `https://dummyjson.com`;

export const getUsersDummyjson = async (): Promise <AllInformUserDummyjsonType> => {
    return await fetch(`${baseUrleDummyjson}` + `/users`)
        .then(res => res.json())
};