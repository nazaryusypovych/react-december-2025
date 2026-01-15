import {Outlet} from "react-router-dom";


const MainPage = () => {
    return (
        <div>

            <h1>Main Page</h1>
            <Outlet></Outlet>

        </div>
    );
};

export default MainPage;