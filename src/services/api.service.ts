import type {userType} from "../model/UserModel.ts";

const getUsers = async (): Promise <userType[]> => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())

    return users;
}

const getUser = async (id: string): Promise <userType> => {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/` + id)
        .then(response => response.json())

    return user;
}






export {
    getUsers,
    getUser
}