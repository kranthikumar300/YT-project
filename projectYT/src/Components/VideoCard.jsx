import {motion} from "framer-motion";

const VideoCard = ({videoInfo = {}}) => {

    const {snippet, statistics} = videoInfo;
    const {thumbnails, title, channelTitle} = snippet;

    return(
        <motion.div
        initial = {{y : 100, opacity : 0}}
        transition={{type : "spring", stiffness : 80, damping : 8, duration : 0.1}}
        animate = {{y : 0, opacity : 1}}
        whileHover={{scale : 0.95}}
         className="m-2 p-4 w-72 h-80 shadow-lg rounded-lg cursor-pointer">
            <img src = {thumbnails?.medium?.url} alt="thumbnail" className="rounded-lg"/>
            <ul className="mt-2 w-64">
                <li className="font-semibold">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics?.viewCount} views</li>
            </ul>
            
            
        </motion.div>
    )
}

export default VideoCard;