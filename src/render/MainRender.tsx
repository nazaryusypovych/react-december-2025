import MenuComponent from "../componens/MenuComponent.tsx";
import {Outlet} from "react-router";


const MainRender = () => {
    return (
        <div>
           <MenuComponent />

            <Outlet />


        </div>
    );
};

export default MainRender;