import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import App from "./App.tsx";
import UserPage from "./page/UserPage.tsx";



const rourer = createBrowserRouter([
    {path: "/", element: <App />, children:[

        {path: "users", element: <UserPage />}
        ]
    }
])


createRoot(document.getElementById('root')!).render(
    <RouterProvider router={rourer}/>
)
