import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import HomePage from "./page/HomePage.tsx";


const router = createBrowserRouter([
    {path: `/`, element: <HomePage/>,
        children:[
            {path: `users`, element: <div>Users page</div>},
            {path: `posts`, element: <div>Posts page</div>},
            {path: `comments`, element: <div>Comments page</div>},
            {path: `products`, element: <div>Products page</div>}
        ]
    }
])


createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)