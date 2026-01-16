import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import MainPage from "./page/MainPage.tsx";
import UsersPage from "./page/UsersPage.tsx";
import PostsPage from "./page/PostsPage.tsx";
import CommentsPage from "./page/CommentsPage.tsx";
import MainRender from "./render/MainRender.tsx";
import UsersComponentJsonplaseholder from "./componens/users/usersJsonplaceholder/UsersComponentJsonplaseholder.tsx";
import UsersComponentDummyjson from "./componens/users/usersDummyjson/UsersComponentDummyjson.tsx";


const router = createBrowserRouter([

    {
        path: "/", element: <MainRender/>, children:[
            {path: "main", element: <MainPage/>},
            {path: "users/", element: <UsersPage/>, children:[
                    {path: "jsonplaceholder", element: <UsersComponentJsonplaseholder/>},
                    {path: "dummyjson", element: <UsersComponentDummyjson/>}

                ]
            },
            {path: "posts/", element: <PostsPage/>, children:[
                    {path: "jsonplaceholder", element: <div>posts-jsonplaceholder</div>},
                    {path: "dummyjson", element: <div>posts-dummyjson</div>}

                ]
            },
            {path: "comments/", element: <CommentsPage/>, children:[
                    {path: "dummyjson", element: <div>comments-dummyjson</div>}
                ]
            },


        ]
    }


])



createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
