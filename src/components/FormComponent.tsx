import {type FormEvent, useState} from "react";


type FormPropsType = {
    username: string,
    passoword: string

}



const FormComponent = () => {

    const [formState, setFormState] = useState <FormPropsType>({
        username: `defolt`,
        passoword: `1111`
    });


    const handelSubmit = (e: FormEvent <HTMLFormElement>) =>{
         e.preventDefault();
         let formInfor = {
             username: formState.username,
             passoword: formState.passoword,
         };

        console.log(formInfor)

     }
    //
    // const handelUsername = (e: FormEvent <HTMLInputElement>) =>{
    //     const input = e.target as HTMLInputElement;
    //     setFormState({...formState, username: input.value})
    //
    // }
    //
    // const handelPassword = (e: FormEvent <HTMLInputElement>) =>{
    //     const input = e.target as HTMLInputElement;
    //     setFormState({...formState, passoword: input.value})
    //
    // }


    const handelInput = (e: FormEvent <HTMLInputElement>) =>{
             const input = e.target as HTMLInputElement;
             setFormState({...formState, [input.name]: input.value})

         }



    return (
        <div>


            <form onSubmit={handelSubmit}>
                <input type="string" name="username" value={formState.username} onChange={handelInput}/>
                <input type="string" name="passoword" value={formState.passoword} onChange={handelInput}/>
                <button type="submit">send</button>
            </form>

        </div>
    );
};

export default FormComponent;