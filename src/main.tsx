import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import MainRenderWrap from "./render-wrap/MainRenderWrap.tsx";
import HomePage from "./page/HomePage.tsx";
import UsersPage from "./page/UsersPage.tsx";
import PostsPage from "./page/PostsPage.tsx";


const router = createBrowserRouter([
    {path:"/", element: <MainRenderWrap/>, children:[
            {path:"home", element: <HomePage/>},
            {path:"users", element: <UsersPage/>},
            {path:"posts", element: <PostsPage/>}

        ]}





])



createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
