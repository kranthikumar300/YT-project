import {useEffect, useState } from "react"
import { YOUTUBE_SUGES_API } from "../assets/ytApi";
import { motion, AnimatePresence } from "framer-motion";


const SearchBar = () => {

    const [searchQueries, setSearchQueries] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(true);
 
    useEffect(() => {

       const timer = setTimeout(() => {
            getSuggestions()
        }, 200);

        return () =>  {
            clearTimeout(timer)
        }

    },[searchQueries])

    const getSuggestions = async () => {
        const sugData = await fetch(YOUTUBE_SUGES_API + searchQueries)
        const jsonSugData = await sugData.json()
        setSuggestions(jsonSugData[1])
    }
    
  return (
    <div className="">
      <div className="flex items-stretch mt-1">
            <input 
            type="search"
            placeholder="search"
            value={searchQueries}
            onChange={(e) => setSearchQueries(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className=" tracking-wider w-[30rem] font-semibold outline-none border border-gray-400 py-2 px-4 rounded-l-full"/>

            <button className="bg-gray-200 border border-gray-400 py-2 px-3 rounded-r-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
             </svg>
            </button>
         </div>

         <AnimatePresence>
          
         {suggestions.length > 0 && showSuggestions && <motion.div
          initial  = {{y : -100, opacity : 0}}
          transition={{type : "spring", duration : 0.3}}
          animate = {{y : 0, opacity : 1}}
          exit={{y : -50, opacity : 0, duration : 0.1}}
          className="absolute z-10 w-[30rem] mt-2 bg-white rounded-lg shadow-xl border border-gray-300">
          <ul className="p-3">
            {
              suggestions.map((suggestion) => <li key={suggestion} className="py-1 px-3 cursor-pointer transition-all hover:bg-gray-200 rounded-lg">{suggestion}</li>)
            }
           
          </ul>
         </motion.div>}
         
         </AnimatePresence>
    </div>
  )
}

export default SearchBar;
