import {useForm} from "react-hook-form";


type FormPropsType2 = {
    username: string,
    passoword: string,
    age: number

}

const FormComponent2 = () => {
    const {handleSubmit, register} = useForm <FormPropsType2>();

    const castomHandler = (formDataPropse: FormPropsType2) =>{
        console.log(formDataPropse)

    }





    return (
        <div>

            <form onSubmit={handleSubmit(castomHandler)}>
                <input type="string" {...register("username")}/>
                <input type="string" {...register("passoword")}/>
                <input type="number" {...register("age")}/>
                <button type="submit">send</button>
            </form>

        </div>
    );
};

export default FormComponent2;