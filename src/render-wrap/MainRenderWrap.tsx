import Menu from "../manu/Menu.tsx";
import {Outlet} from "react-router";


const MainRenderWrap = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainRenderWrap;