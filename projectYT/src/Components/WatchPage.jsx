import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../assets/Store/SlideSlice";
import {useSearchParams} from "react-router-dom";

const WatchPage = () => {

    const [searchParams] = useSearchParams();

    const dispatch =  useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
    })

    return(
        <div>
            <div>
            <iframe width="1200"
             height="600" 
             src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player" 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="ml-5 mt-2 rounded-lg"></iframe>
            </div>
            
        </div>
    )
}

export default WatchPage;