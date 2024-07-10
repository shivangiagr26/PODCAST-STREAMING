import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

export const FavItem = ({ favitem, onClick }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <p className="font-bold mt-2 mb-1">{favitem.name}</p>
    </div>
  );
};

export default FavItem;
