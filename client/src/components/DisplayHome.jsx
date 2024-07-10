import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import { songsData } from "../assets/assets";
import { recentData } from "../assets/assets";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-3xl">Featured Podcasts</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-3xl">Recently Played</h1>
        <div className="flex overflow-auto">
          {recentData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-3xl">Popular Podcasts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <div>
              <AlbumItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;
