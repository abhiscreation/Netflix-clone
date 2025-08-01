import React from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import Navbar from "../components/Headerr";
import Footer from "../components/Footer";
import MovieRow from '../MovieRow'; // Adjust the path if needed
import '../App.css';
import '../MovieRow.css';

const Home = () => {
  const navigate = useNavigate();
  // Remove old handleLogout and button, Navbar handles it now
  const whiteTigerImg = "https://occ-0-7338-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfiPuL9HSzLZySLxpC7VaHGhopGA_4FvruCkrW70WPI5jOy8xXQPNKbRi7YtEQwjw5syqzHl9Xa02B5r4ryeUPukz_zv9VJG5Y_WjkU1sHcfr0J_1yZyhEKkeLfBuzzVBP4Y.jpg?r=869";
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#141414', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="content first-row">
        <MovieRow
          title="Drama Movies"
          genreLink="/browse/m/genre/5763"
          movies={[
            {
              title: "Sample Movie 1",
              image: whiteTigerImg,
              link: "/watch/1"
            },
            {
              title: "Sample Movie 2",
              image: whiteTigerImg,
              link: "/watch/2"
            },
            {
              title: "Sample Movie 3",
              image: whiteTigerImg,
              link: "/watch/3"
            },
            {
              title: "Sample Movie 4",
              image: whiteTigerImg,
              link: "/watch/4"
            },
            {
              title: "Sample Movie 5",
              image: whiteTigerImg,
              link: "/watch/5"
            },
            {
              title: "Sample Movie 6",
              image: whiteTigerImg,
              link: "/watch/6"
            },
            {
              title: "Sample Movie 7",
              image: whiteTigerImg,
              link: "/watch/7"
            },
            {
              title: "Sample Movie 8",
              image: whiteTigerImg,
              link: "/watch/8"
            },
            {
              title: "Sample Movie 9",
              image: whiteTigerImg,
              link: "/watch/9"
            },
            {
              title: "Sample Movie 10",
              image: whiteTigerImg,
              link: "/watch/10"
            },
            {
              title: "Sample Movie 11",
              image: whiteTigerImg,
              link: "/watch/11"
            },
            {
              title: "Sample Movie 12",
              image: whiteTigerImg,
              link: "/watch/12"
            },
            {
              title: "Sample Movie 13",
              image: whiteTigerImg,
              link: "/watch/13"
            },
            {
              title: "Sample Movie 14",
              image: whiteTigerImg,
              link: "/watch/14"
            },
            {
              title: "Sample Movie 15",
              image: whiteTigerImg,
              link: "/watch/15"
            },
            {
              title: "Sample Movie 16",
              image: whiteTigerImg,
              link: "/watch/16"
            },
            {
              title: "Sample Movie 17",
              image: whiteTigerImg,
              link: "/watch/17"
            },
            {
              title: "Sample Movie 18",
              image: whiteTigerImg,
              link: "/watch/18"
            },
            {
              title: "Sample Movie 19",
              image: whiteTigerImg,
              link: "/watch/19"
            },
            {
              title: "Sample Movie 20",
              image: whiteTigerImg,
              link: "/watch/20"
            },
            {
              title: "Sample Movie 21",
              image: whiteTigerImg,
              link: "/watch/21"
            },
            {
              title: "Sample Movie 22",
              image: whiteTigerImg,
              link: "/watch/22"
            },
            {
              title: "Sample Movie 23",
              image: whiteTigerImg,
              link: "/watch/23"
            },
            {
              title: "Sample Movie 24",
              image: whiteTigerImg,
              link: "/watch/24"
            },
            {
              title: "Sample Movie 25",
              image: whiteTigerImg,
              link: "/watch/25"
            },
            {
              title: "Sample Movie 26",
              image: whiteTigerImg,
              link: "/watch/26"
            },
            {
              title: "Sample Movie 27",
              image: whiteTigerImg,
              link: "/watch/27"
            },
            {
              title: "Sample Movie 28",
              image: whiteTigerImg,
              link: "/watch/28"
            },
            {
              title: "Sample Movie 29",
              image: whiteTigerImg,
              link: "/watch/29"
            },
            {
              title: "Sample Movie 30",
              image: whiteTigerImg,
              link: "/watch/30"
            },
            {
              title: "Sample Movie 31",
              image: whiteTigerImg,
              link: "/watch/31"
            },
            {
              title: "Sample Movie 32",
              image: whiteTigerImg,
              link: "/watch/32"
            },
            {
              title: "Sample Movie 33",
              image: whiteTigerImg,
              link: "/watch/33"
            },
            {
              title: "Sample Movie 34",
              image: whiteTigerImg,
              link: "/watch/34"
            },
            {
              title: "Sample Movie 35",
              image: whiteTigerImg,
              link: "/watch/35"
            },
            {
              title: "Sample Movie 36",
              image: whiteTigerImg,
              link: "/watch/36"
            },
            {
              title: "Sample Movie 37",
              image: whiteTigerImg,
              link: "/watch/37"
            },
            {
              title: "Sample Movie 38",
              image: whiteTigerImg,
              link: "/watch/38"
            },
            {
              title: "Sample Movie 39",
              image: whiteTigerImg,
              link: "/watch/39"
            },
            {
              title: "Sample Movie 40",
              image: whiteTigerImg,
              link: "/watch/40"
            },
            {
              title: "Sample Movie 41",
              image: whiteTigerImg,
              link: "/watch/41"
            },
            {
              title: "Sample Movie 42",
              image: whiteTigerImg,
              link: "/watch/42"
            },
          ]}

        />
        <MovieRow
          title="Action & Adventure"
          genreLink="/browse/m/genre/1365"
          movies={[
            {
              title: "Sample Movie 1",
              image: whiteTigerImg,
              link: "/watch/1"
            },
            {
              title: "Sample Movie 2",
              image: whiteTigerImg,
              link: "/watch/2"
            },
            {
              title: "Sample Movie 3",
              image: whiteTigerImg,
              link: "/watch/3"
            },
            {
              title: "Sample Movie 4",
              image: whiteTigerImg,
              link: "/watch/4"
            },
            {
              title: "Sample Movie 5",
              image: whiteTigerImg,
              link: "/watch/5"
            },
            {
              title: "Sample Movie 6",
              image: whiteTigerImg,
              link: "/watch/6"
            },
            {
              title: "Sample Movie 7",
              image: whiteTigerImg,
              link: "/watch/7"
            },
            {
              title: "Sample Movie 8",
              image: whiteTigerImg,
              link: "/watch/8"
            },
            {
              title: "Sample Movie 9",
              image: whiteTigerImg,
              link: "/watch/9"
            },
            {
              title: "Sample Movie 10",
              image: whiteTigerImg,
              link: "/watch/10"
            },
            {
              title: "Sample Movie 11",
              image: whiteTigerImg,
              link: "/watch/11"
            },
            {
              title: "Sample Movie 12",
              image: whiteTigerImg,
              link: "/watch/12"
            },
            {
              title: "Sample Movie 13",
              image: whiteTigerImg,
              link: "/watch/13"
            },
            {
              title: "Sample Movie 14",
              image: whiteTigerImg,
              link: "/watch/14"
            },
            {
              title: "Sample Movie 15",
              image: whiteTigerImg,
              link: "/watch/15"
            },
            {
              title: "Sample Movie 16",
              image: whiteTigerImg,
              link: "/watch/16"
            },
            {
              title: "Sample Movie 17",
              image: whiteTigerImg,
              link: "/watch/17"
            },
            {
              title: "Sample Movie 18",
              image: whiteTigerImg,
              link: "/watch/18"
            },
            {
              title: "Sample Movie 19",
              image: whiteTigerImg,
              link: "/watch/19"
            },
            {
              title: "Sample Movie 20",
              image: whiteTigerImg,
              link: "/watch/20"
            },
            {
              title: "Sample Movie 21",
              image: whiteTigerImg,
              link: "/watch/21"
            },
            {
              title: "Sample Movie 22",
              image: whiteTigerImg,
              link: "/watch/22"
            },
            {
              title: "Sample Movie 23",
              image: whiteTigerImg,
              link: "/watch/23"
            },
            {
              title: "Sample Movie 24",
              image: whiteTigerImg,
              link: "/watch/24"
            },
            {
              title: "Sample Movie 25",
              image: whiteTigerImg,
              link: "/watch/25"
            },
            {
              title: "Sample Movie 26",
              image: whiteTigerImg,
              link: "/watch/26"
            },
            {
              title: "Sample Movie 27",
              image: whiteTigerImg,
              link: "/watch/27"
            },
            {
              title: "Sample Movie 28",
              image: whiteTigerImg,
              link: "/watch/28"
            },
            {
              title: "Sample Movie 29",
              image: whiteTigerImg,
              link: "/watch/29"
            },
            {
              title: "Sample Movie 30",
              image: whiteTigerImg,
              link: "/watch/30"
            },
            {
              title: "Sample Movie 31",
              image: whiteTigerImg,
              link: "/watch/31"
            },
            {
              title: "Sample Movie 32",
              image: whiteTigerImg,
              link: "/watch/32"
            },
            {
              title: "Sample Movie 33",
              image: whiteTigerImg,
              link: "/watch/33"
            },
            {
              title: "Sample Movie 34",
              image: whiteTigerImg,
              link: "/watch/34"
            },
            {
              title: "Sample Movie 35",
              image: whiteTigerImg,
              link: "/watch/35"
            },
            {
              title: "Sample Movie 36",
              image: whiteTigerImg,
              link: "/watch/36"
            },
            {
              title: "Sample Movie 37",
              image: whiteTigerImg,
              link: "/watch/37"
            },
            {
              title: "Sample Movie 38",
              image: whiteTigerImg,
              link: "/watch/38"
            },
            {
              title: "Sample Movie 39",
              image: whiteTigerImg,
              link: "/watch/39"
            },
            {
              title: "Sample Movie 40",
              image: whiteTigerImg,
              link: "/watch/40"
            },
            {
              title: "Sample Movie 41",
              image: whiteTigerImg,
              link: "/watch/41"
            },
            {
              title: "Sample Movie 42",
              image: whiteTigerImg,
              link: "/watch/42"
            },
          ]}
        />
        <MovieRow
          title="Comedies"
          genreLink="/browse/m/genre/6548"
          movies={[
            {
              title: "Sample Movie 1",
              image: whiteTigerImg,
              link: "/watch/1"
            },
            {
              title: "Sample Movie 2",
              image: whiteTigerImg,
              link: "/watch/2"
            },
            {
              title: "Sample Movie 3",
              image: whiteTigerImg,
              link: "/watch/3"
            },
            {
              title: "Sample Movie 4",
              image: whiteTigerImg,
              link: "/watch/4"
            },
            {
              title: "Sample Movie 5",
              image: whiteTigerImg,
              link: "/watch/5"
            },
            {
              title: "Sample Movie 6",
              image: whiteTigerImg,
              link: "/watch/6"
            },
            {
              title: "Sample Movie 7",
              image: whiteTigerImg,
              link: "/watch/7"
            },
            {
              title: "Sample Movie 8",
              image: whiteTigerImg,
              link: "/watch/8"
            },
            {
              title: "Sample Movie 9",
              image: whiteTigerImg,
              link: "/watch/9"
            },
            {
              title: "Sample Movie 10",
              image: whiteTigerImg,
              link: "/watch/10"
            },
            {
              title: "Sample Movie 11",
              image: whiteTigerImg,
              link: "/watch/11"
            },
            {
              title: "Sample Movie 12",
              image: whiteTigerImg,
              link: "/watch/12"
            },
            {
              title: "Sample Movie 13",
              image: whiteTigerImg,
              link: "/watch/13"
            },
            {
              title: "Sample Movie 14",
              image: whiteTigerImg,
              link: "/watch/14"
            },
            {
              title: "Sample Movie 15",
              image: whiteTigerImg,
              link: "/watch/15"
            },
            {
              title: "Sample Movie 16",
              image: whiteTigerImg,
              link: "/watch/16"
            },
            {
              title: "Sample Movie 17",
              image: whiteTigerImg,
              link: "/watch/17"
            },
            {
              title: "Sample Movie 18",
              image: whiteTigerImg,
              link: "/watch/18"
            },
            {
              title: "Sample Movie 19",
              image: whiteTigerImg,
              link: "/watch/19"
            },
            {
              title: "Sample Movie 20",
              image: whiteTigerImg,
              link: "/watch/20"
            },
            {
              title: "Sample Movie 21",
              image: whiteTigerImg,
              link: "/watch/21"
            },
            {
              title: "Sample Movie 22",
              image: whiteTigerImg,
              link: "/watch/22"
            },
            {
              title: "Sample Movie 23",
              image: whiteTigerImg,
              link: "/watch/23"
            },
            {
              title: "Sample Movie 24",
              image: whiteTigerImg,
              link: "/watch/24"
            },
            {
              title: "Sample Movie 25",
              image: whiteTigerImg,
              link: "/watch/25"
            },
            {
              title: "Sample Movie 26",
              image: whiteTigerImg,
              link: "/watch/26"
            },
            {
              title: "Sample Movie 27",
              image: whiteTigerImg,
              link: "/watch/27"
            },
            {
              title: "Sample Movie 28",
              image: whiteTigerImg,
              link: "/watch/28"
            },
            {
              title: "Sample Movie 29",
              image: whiteTigerImg,
              link: "/watch/29"
            },
            {
              title: "Sample Movie 30",
              image: whiteTigerImg,
              link: "/watch/30"
            },
            {
              title: "Sample Movie 31",
              image: whiteTigerImg,
              link: "/watch/31"
            },
            {
              title: "Sample Movie 32",
              image: whiteTigerImg,
              link: "/watch/32"
            },
            {
              title: "Sample Movie 33",
              image: whiteTigerImg,
              link: "/watch/33"
            },
            {
              title: "Sample Movie 34",
              image: whiteTigerImg,
              link: "/watch/34"
            },
            {
              title: "Sample Movie 35",
              image: whiteTigerImg,
              link: "/watch/35"
            },
            {
              title: "Sample Movie 36",
              image: whiteTigerImg,
              link: "/watch/36"
            },
            {
              title: "Sample Movie 37",
              image: whiteTigerImg,
              link: "/watch/37"
            },
            {
              title: "Sample Movie 38",
              image: whiteTigerImg,
              link: "/watch/38"
            },
            {
              title: "Sample Movie 39",
              image: whiteTigerImg,
              link: "/watch/39"
            },
            {
              title: "Sample Movie 40",
              image: whiteTigerImg,
              link: "/watch/40"
            },
            {
              title: "Sample Movie 41",
              image: whiteTigerImg,
              link: "/watch/41"
            },
            {
              title: "Sample Movie 42",
              image: whiteTigerImg,
              link: "/watch/42"
            },
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
