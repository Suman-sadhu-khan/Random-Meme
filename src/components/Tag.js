import axios from "axios";
import useGif from "../hooks/useGif";
import { useEffect, useState } from "react"
import Spinner from "./Spinner";
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;


export default function Tag(){
    const [tag,setTag]=useState("car")
    // const [gif,setGif]=useState("");
    // const [loading,setLoading]=useState(false);

    // async function fetchData(){
    //     setLoading(true);
    //     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
    //     const {data}=await axios.get(url);
    //    const imageSource=data.data.images.downsized_large.url;
    //    setGif(imageSource);
    //     setLoading(false);//mne gif aste j time lgbe totokhn loading dekhabe
    // }

    // useEffect(()=>{//function call
    //     fetchData();
    // },[]);

    const {gif,loading,fetchData}=useGif(tag);

     const clickHandler=()=>{
        fetchData(tag);
     }
     const changeHandler=(event)=>{
        setTag(event.target.value);
     }
    return(
        <div className="w-1/2  bg-blue-500 rounded-lg  border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-2xl underline uppercase font-bold mt-[15px]">Random {tag} Gif</h1>

            {
                loading?(<Spinner/>):( <img src={gif} width="450"  />)
            }

                <input className="w-10/12 mb-[6px] py-2 rounded-lg text-center
                 " value={tag} onChange={changeHandler}/>
            <button onClick={clickHandler}
            className="w-10/12 bg-yellow-400 hover:bg-yellow-500 rounded-lg py-2  mb-[20px]" >Generate</button>
        </div>
    )
}