import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center pb-10">
     
      <h1 className=" sticky top-0 bg-white rounded-lg w-11/12 text-center mt-[40px] ml-[25px]mr-[25px] text-3xl font-bold px-10 py-2 bg-gradient-to-r from-purple-500 to-pink-500  ">RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        
        <Tag/>
      </div>
    </div>
  );
}
