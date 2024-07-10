import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[15%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[10%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold text-2xl">Home</p>
        </div>
        {/* <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-b old">Search</p>
        </div> */}
      </div>
      <div className="bg-[#121212] h-[100%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="stack_icon" />
            <p className="font-semibold text-2xl">Library</p>
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1 className="font-bold text-2xl">Your Favorites</h1>
          <div>
            <p className="font-light">
              Tap on button to add it to your Favorites
            </p>
            <div
              id="favList"
              className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 "
            ></div>
          </div>
          {/* <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Show All
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
