import {useEffect, useState} from "react";
import TodoComponent from "./TodoComponent.tsx";




const TodoComponents = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(todos => {
                setTodos(todos)
            });

        return () =>{
            console.log(`done`);
        }

    }, []);





    return (
        <div>
            {
                todos.map(todo => <TodoComponent item={todo} key={todo.id}/>)
            }

        </div>
    );
};

export default TodoComponents;