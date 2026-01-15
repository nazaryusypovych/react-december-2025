import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./page/MainPage.tsx";
import UsersPage from "./page/UsersPage.tsx";
import PostsPage from "./page/PostsPage.tsx";
import CommentsPage from "./page/CommentsPage.tsx";
import ProductsPage from "./page/ProductsPage.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route path="users" element={<UsersPage />}/>
                <Route path="posts" element={<PostsPage />}/>
                <Route path="comments" element={<CommentsPage />}/>
                <Route path="products" element={<ProductsPage />}/>

            </Route>


        </Routes>

    </BrowserRouter>
)