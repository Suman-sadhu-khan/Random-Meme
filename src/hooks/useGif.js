import axios from "axios";
import { useEffect, useState } from "react"
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
   

export default function useGif(tag){
    
    const randomMemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const tagMemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const [gif,setGif]=useState("");
    const [loading,setLoading]=useState(false);
    


    async function fetchData(tag){
        setLoading(true);
       
        const {data}=await axios.get(tag?tagMemeUrl:randomMemeUrl);
       const imageSource=data.data.images.downsized_large.url;
       setGif(imageSource);
        setLoading(false);//mne gif aste j time lgbe totokhn loading dekhabe
    }

    useEffect(()=>{//function call
        fetchData("car");
    },[]);

     return{gif,loading,fetchData}
    
}