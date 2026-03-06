import {useForm} from "react-hook-form";
import type {CarType} from "../model/CarsTypeModel.ts";
import {createCar} from "../services/api.services.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validator/CarValidator.ts";


const FormCar = () => {
    const {register, handleSubmit, formState: {errors}} = useForm <CarType>( {mode: `all`, resolver: joiResolver(carValidator)});

    const createHandle = (data: CarType) =>{
        createCar(data);

    }



    return (
        <div>
            <form onSubmit={handleSubmit(createHandle)}>
                <div><input type="text" {...register(`brand`)}/></div>
                <div>{errors.brand?.message}</div>

                <div><input type="number" {...register(`price`)}/></div>
                <div>{errors.price?.message}</div>

                <div><input type="number" {...register(`year`)}/></div>
                <div>{errors.year?.message}</div>

                <button>Add car</button>


            </form>

        </div>
    );
};

    export default FormCar;