import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import MainPage from "./page/MainPage.tsx";
import UsersPage from "./page/UsersPage.tsx";
import PostsPage from "./page/PostsPage.tsx";
import CommentsPage from "./page/CommentsPage.tsx";
import MainRender from "./render/MainRender.tsx";


const router = createBrowserRouter([

    {
        path: "/", element: <MainRender/>, children:[
            {path: "main", element: <MainPage/>},
            {path: "users/", element: <UsersPage/>, children:[
                    {path: "jsonplaceholder", element: <div>user-jsonplaceholder</div>},
                    {path: "dummyjson", element: <div>user-dummyjson</div>}

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
