import axios from "axios";
import { useEffect, useState } from "react"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

export default function Random(){
    // const [gif,setGif]=useState("");
    // const [loading,setLoading]=useState(false);

    // async function fetchData(){
    //     setLoading(true);
    //     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    //     const {data}=await axios.get(url);
    //    const imageSource=data.data.images.downsized_large.url;
    //    setGif(imageSource);
    //     setLoading(false);//mne gif aste j time lgbe totokhn loading dekhabe
    // }

    // useEffect(()=>{//function call
    //     fetchData();
    // },[]);

    const {gif,loading,fetchData}=useGif();

     const clickHandler=()=>{
        fetchData();
     }
    return(
        <div className="w-1/2  bg-green-500 rounded-lg  border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-2xl underline uppercase font-bold mt-[15px]">A Random Gif</h1>

            {
                loading?(<Spinner/>):( <img src={gif} width="450"  />)
            }
           
            <button onClick={clickHandler}
            className="w-10/12 bg-yellow-400 hover:bg-yellow-500  rounded-lg py-2  mb-[20px]" >Generate</button>
        </div>
    )
}