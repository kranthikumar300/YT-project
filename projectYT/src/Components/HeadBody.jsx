import { Outlet } from "react-router-dom";
import SlideBar from "./SlideBar";

const HeadBody = () => {

    return(
        <div className="flex relative">
         <SlideBar/>
         <Outlet/>
        </div>
    )
}

export default HeadBody;