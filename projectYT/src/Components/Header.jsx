import {useDispatch} from "react-redux";
import { toggleMenu } from "../assets/Store/SlideSlice";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";


const Header = () => {

    const dispatch = useDispatch()

    const toggleSlideBar = () => {
        dispatch(toggleMenu())

    }

    return(
        <div className="m-4 grid sm:grid-cols-12">
            <div className="sm:col-span-2">
                <svg
                onClick={toggleSlideBar}
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 1 24 24" strokeWidth={1.5} stroke="currentColor" className="size-11 shadow-xl rounded-full cursor-pointer transition-all transform hover:scale-95">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            <div className="sm:col-span-8 flex justify-center gap-4">
             <Link to = "/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 mt-1 cursor-pointer transform hover:scale-110 hover:fill-purple-500 transition-all duration-200 ease-in-out">
                 <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
             </Link>
              <SearchBar/>
            </div>

            <div className="sm:col-span-2 flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-11 shadow-xl rounded-full cursor-pointer transform hover:fill-purple-500 transition-all duration-200 ease-in-out hover:scale-95">
                 <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                </svg>
            </div>
        
        </div>
    )
}

export default Header;