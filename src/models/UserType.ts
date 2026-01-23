

type CoordinatesType = {
    lat: number;
    lng: number;
};

type AddressType = {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: CoordinatesType;
    country: string;
};

type HairType = {
    color: string;
    type: string;
};

type BankType = {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
};

type CompanyType = {
    department: string;
    name: string;
    title: string;
    address: AddressType;
};

type CryptoType = {
    coin: string;
    wallet: string;
    network: string;
};

export type UserDummyjsonType = {
    id: number;
    firstName: string;
    lastName: string;
    maidenName?: string;
    age: number;
    gender: 'female' | 'male' | 'other';
    email: string;
    phone: string;
    username: string;
    password?: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: HairType;
    ip: string;
    address: AddressType;
    macAddress: string;
    university: string;
    bank: BankType;
    company: CompanyType;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: CryptoType;
    role: 'admin' | 'moderator' | 'user';
};


export type AllInformUserDummyjsonType = {
    users: UserDummyjsonType[],
    total: number,
    skip: number,
    limit: number
}