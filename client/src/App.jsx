import { useContext } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Display from "./components/Display";
import DisplayHome from "./components/DisplayHome";
import DisplayAlbum from "./components/DisplayAlbum";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { PlayerContext } from "./context/PlayerContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export default function App() {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    // <div className="h-screen bg-black">
    //   <div className="h-[90%] flex">
    //     <Sidebar />
    //     <Display />
    //     {/* <DisplayHome /> */}
    //   </div>
    //   <Player />
    //   <audio ref={audioRef} src={track.file} preload="auto"></audio>
    // </div>
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route
          exact
          path="/Display"
          element={
            <div className="h-screen bg-black">
              <div className="h-[90%] w- flex">
                <Sidebar />
                <Display />
              </div>
              <Player />
              <audio ref={audioRef} src={track.file} preload="auto"></audio>
            </div>
          }
        />

        {/* <Route path="*" element={<Navigate to="/Display" />} /> */}
      </Routes>
    </>
  );
}
