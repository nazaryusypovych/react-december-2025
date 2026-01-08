

type userAddressGeoType = {
    "lat": string,
    "lng": string
}


type userAddressType = {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": userAddressGeoType
}


type userCompanyType = {
    "name": string,
    "catchPhrase": string,
    "bs": string
}




export type userType = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": userAddressType,
    "phone": string,
    "website": string,
    "company": userCompanyType
}