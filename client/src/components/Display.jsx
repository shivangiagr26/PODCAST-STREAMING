import { Route, Routes, useLocation, useParams } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useEffect, useRef } from "react";
import { albumsData } from "../assets/assets";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const { id: albumId } = useParams();
  const isAlbum = location.pathname.includes("album");
  const bgColor =
    isAlbum && albumsData[Number(albumId)]
      ? albumsData[Number(albumId)].bgColor
      : "#121212";

  useEffect(() => {
    if (isAlbum && bgColor) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  }, [isAlbum, bgColor]);

  return (
    <div
      ref={displayRef}
      className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
