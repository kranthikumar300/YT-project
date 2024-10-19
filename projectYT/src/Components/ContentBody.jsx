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
            
            
         <div 
          className="flex flex-wrap justify-evenly ml-5 mt-5">
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