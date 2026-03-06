import {useEffect, useState} from "react";
import {getAllCars} from "../services/api.services.ts";
import type {CarType} from "../model/CarsTypeModel.ts";
import CarComponent from "./CarComponent.tsx";


const CarsComponent = () => {
    const [cars, setCars] = useState<CarType[]>();

    useEffect(() => {
        getAllCars().
        then((response) => setCars(response))
    }, []);


    console.log(cars)


    return (
        <div>

            {
                cars?.map(car => <CarComponent key={car.id} item={car} />)
            }


        </div>
    );
};

export default CarsComponent;