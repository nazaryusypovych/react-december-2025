import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import MainLayouder from "./layouder/MainLayouder.tsx";
import UsersPage from "./page/UsersPage.tsx";
import CardsPage from "./page/CardsPage.tsx";


const router = createBrowserRouter([
    {path: "/", element: <MainLayouder/>, children:[
            {path: "users/", element: <UsersPage/>, children:[
                    {path: ":id/carts", element: <CardsPage/>}


                ]}

        ]}


])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
