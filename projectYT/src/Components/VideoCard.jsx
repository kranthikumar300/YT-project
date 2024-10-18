

const VideoCard = ({videoInfo}) => {

    const {snippet, statistics} = videoInfo;
    const {thumbnails, title, channelTitle} = snippet;

    return(
        <div className="m-2 p-4 w-72 shadow-lg rounded-lg cursor-pointer transform transition-all hover:scale-95 duration-300">
            <img src = {thumbnails?.medium?.url} alt="thumbnail" className="rounded-lg"/>
            <ul className="mt-2 w-64">
                <li className="font-semibold">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics?.viewCount} views</li>
            </ul>
            
            
        </div>
    )
}

export default VideoCard;