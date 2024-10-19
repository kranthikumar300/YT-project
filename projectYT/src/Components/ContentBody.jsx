import { useEffect,useState } from "react";
import { YOUTUBE_API } from "../assets/ytApi";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const ContentBody = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
     getVideos();
    },[])

    const getVideos = async () => {
      const data = await fetch(YOUTUBE_API)
      const jsonData = await data.json()
      
      setVideos(jsonData.items);
    }
    return(
      
        <div>
            <div className="absolute mt-1 left-[39rem] flex items-stretch">
            <input type="search" placeholder="search" className=" tracking-wider w-[30rem] font-semibold outline-none border border-gray-400 py-2 px-4 rounded-l-full"/>

            <button className="bg-gray-200 border border-gray-400 py-2 px-3 rounded-r-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
             </svg>
            </button>
         </div>

         <div 
          className="flex flex-wrap justify-evenly ml-5 mt-14">
            {
              videos.map((video) => 
                <Link key={video.id} to={"/watchPage?v=" + video.id}>
                 <VideoCard videoInfo={video}/>
                </Link>)
            }
         </div>
         
            
        </div>
        
    )
}

export default ContentBody;