import {useSearchParams} from "react-router";
import {useEffect} from "react";


const UsersComponent = () => {
    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        const pg = query.get(`pg`);
        fetch(`https://reqres.in/api/users?page=` + pg)
            .then(value => value.json())
            .then(value => console.log(value))

    }, [query]);



    return (
        <div>

            UsersComponent

        </div>
    );
};

export default UsersComponent;