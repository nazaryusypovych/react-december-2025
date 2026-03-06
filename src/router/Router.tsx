import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import CarsPage from "../page/CarsPage.tsx";
import CreateCarPage from "../page/CreateCarPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <App/>, children:[
            {path:`/cars`, element: <CarsPage/>},
            {path:`/cars/create`, element: <CreateCarPage/>}
        ]
    }
])