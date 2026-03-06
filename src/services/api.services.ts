import axios from "axios";
import type {CarType} from "../model/CarsTypeModel.ts";


const axiosInstance = axios.create({
    baseURL: `http://185.69.152.209/carsAPI/v1`,
    headers: {"Content-Type": `application/json`}
})

export const getAllCars = async (): Promise<CarType[]> => {
    const {data} = await axiosInstance.get<CarType[]>(`/cars`);
    return data;
}

export const createCar = async (car: CarType) =>{
    await axiosInstance.post(`cars`, car);
}