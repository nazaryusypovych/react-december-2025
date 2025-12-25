
type userGeo = {
    "lat": string,
    "lng": string
}


type userAddress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: userGeo
}

type userCompany = {
    "name": string,
    "catchPhrase": string,
    "bs": string
}



export type userType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: userAddress,
    phone: string,
    website: string,
    company: userCompany
}