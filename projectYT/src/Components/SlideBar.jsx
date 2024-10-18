import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const SlideBar = () => {

    const isMenuOpen = useSelector(AppStore => AppStore.slide.isMenuOpen)
    if(!isMenuOpen) return null;

    return(
        <div className="shadow-xl rounded-xl mx-4">
            <p className="text-2xl flex justify-center pt-2 font-display">MyTube</p>
            <ul className="px-4 text-lg py-4">
                <li className="transition-all hover:text-purple-500"><Link to = "/">Home</Link></li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <h1 className="font-bold text-lg flex justify-center">You</h1>
            <ul className="px-4 text-lg py-4">
                <li>History</li>
                <li>Playlist</li>
                <li>Watch Later</li>
                <li>Liked Videos</li>
            </ul>
            <h1 className="font-bold text-lg flex justify-center">Explore</h1>
            <ul className="px-4 text-lg py-5">
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Films</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sports</li>
                <li>Courses</li>
                <li>Fashion & Beauty</li>
                <li>Podcast</li>
            </ul>
        </div>
    )
}

export default SlideBar;