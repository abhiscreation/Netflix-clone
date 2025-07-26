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
              title: "Stranger Things",
              image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
              link: "/watch/1"
            },
            {
              title: "Money Heist",
              image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
              link: "/watch/2"
            },
            {
              title: "The Witcher",
              image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
              link: "/watch/3"
            },
            {
              title: "Wednesday",
              image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
              link: "/watch/4"
            },
            {
              title: "Breaking Bad",
              image: "https://image.tmdb.org/t/p/w500/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg",
              link: "/watch/5"
            },
            {
              title: "Narcos",
              image: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
              link: "/watch/6"
            },
            {
              title: "Squid Game",
              image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
              link: "/watch/7"
            },
            {
              title: "Dark",
              image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
              link: "/watch/8"
            },
            {
              title: "Lucifer",
              image: "https://image.tmdb.org/t/p/w500/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
              link: "/watch/9"
            },
            {
              title: "The Crown",
              image: "https://image.tmdb.org/t/p/w500/lt0dWI0l2xv6G2oMJKZ88Rz7NJr.jpg",
              link: "/watch/10"
            },
            {
              title: "The Queen's Gambit",
              image: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
              link: "/watch/11"
            },
            {
              title: "Peaky Blinders",
              image: "https://image.tmdb.org/t/p/w500/3LfvziKz2gHxSa6J5l3WGC6UuZc.jpg",
              link: "/watch/12"
            },
            {
              title: "House of Cards",
              image: "https://image.tmdb.org/t/p/w500/pE3Z2Ue9WkCgjQvOlbnjYEOgNTG.jpg",
              link: "/watch/13"
            },
            {
              title: "Bridgerton",
              image: "https://image.tmdb.org/t/p/w500/4k7d14vHyDs57YzMTZy7IdwB7pC.jpg",
              link: "/watch/14"
            },
            {
              title: "The Sandman",
              image: "https://image.tmdb.org/t/p/w500/q54qEgagGOYCq5D1903eBVMNkbo.jpg",
              link: "/watch/15"
            },
            {
              title: "Resident Evil",
              image: "https://image.tmdb.org/t/p/w500/jlL6zxtZOYi9N7BPf0DJP9z0UPm.jpg",
              link: "/watch/16"
            },
            {
              title: "13 Reasons Why",
              image: "https://image.tmdb.org/t/p/w500/gf7WgO5QXN9pblgNlmKZjh7yGfw.jpg",
              link: "/watch/17"
            },
            {
              title: "Sweet Tooth",
              image: "https://image.tmdb.org/t/p/w500/kxFxtYHekrCQPSuZL3hJvhPPHHe.jpg",
              link: "/watch/18"
            },
            {
              title: "The Haunting of Hill House",
              image: "https://image.tmdb.org/t/p/w500/sRB0bqk3uJvU7Z5WnfUCNyzKfWa.jpg",
              link: "/watch/19"
            },
            {
              title: "The Serpent",
              image: "https://image.tmdb.org/t/p/w500/tcT4NTHyN1T3Nf48HNeAXZgfOba.jpg",
              link: "/watch/20"
            },
            {
              title: "Love, Death & Robots",
              image: "https://image.tmdb.org/t/p/w500/asDqvkE66EegtKJJXIRhBJPxscr.jpg",
              link: "/watch/21"
            },
            {
              title: "The Lincoln Lawyer",
              image: "https://image.tmdb.org/t/p/w500/6lXQK1e7RvG7pTDaZLnZB3aQYsf.jpg",
              link: "/watch/22"
            },
            {
              title: "Ozark",
              image: "https://image.tmdb.org/t/p/w500/4n8QNNdk4BOX9Dslfbz5Dy6j1HK.jpg",
              link: "/watch/23"
            },
            {
              title: "Dead to Me",
              image: "https://image.tmdb.org/t/p/w500/qZvqVEyt32cW2RYsGfaJ7ApzTWJ.jpg",
              link: "/watch/24"
            },
            {
              title: "Mindhunter",
              image: "https://image.tmdb.org/t/p/w500/x6FsYOKg6oRaaXYh8fgDt06eH6U.jpg",
              link: "/watch/25"
            },
            {
              title: "The Order",
              image: "https://image.tmdb.org/t/p/w500/xHOzFK4DybPuLqXqNW0FKB1A2mC.jpg",
              link: "/watch/26"
            },
            {
              title: "Locke & Key",
              image: "https://image.tmdb.org/t/p/w500/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg",
              link: "/watch/27"
            },
            {
              title: "Ragnarok",
              image: "https://image.tmdb.org/t/p/w500/fhHNTkzT9Y1pA3VUrWRS8uu9FXy.jpg",
              link: "/watch/28"
            },
            {
              title: "Blood & Water",
              image: "https://image.tmdb.org/t/p/w500/dTofU9gOogH5w04Lr9m3rGVgJZx.jpg",
              link: "/watch/29"
            },
            {
              title: "Unorthodox",
              image: "https://image.tmdb.org/t/p/w500/zCymVQykmoF9Cq5PY9NjpbtpQoC.jpg",
              link: "/watch/30"
            },
            {
              title: "The Society",
              image: "https://image.tmdb.org/t/p/w500/5YtQeItR5UAwYNVKYYmEGt7u5Va.jpg",
              link: "/watch/31"
            },
            {
              title: "The OA",
              image: "https://image.tmdb.org/t/p/w500/2XJ3dffZxmoFzYcFMSF0ODsW8nc.jpg",
              link: "/watch/32"
            },
            {
              title: "Travelers",
              image: "https://image.tmdb.org/t/p/w500/t3ljYyoYhXWpvGzXYhw3z3vZkdX.jpg",
              link: "/watch/33"
            },
            {
              title: "Marco Polo",
              image: "https://image.tmdb.org/t/p/w500/8qUjizIexIYcFDtvlt8k1WQmlP6.jpg",
              link: "/watch/34"
            },
            {
              title: "The Get Down",
              image: "https://image.tmdb.org/t/p/w500/b83kPPyWWUjXPo9r9yqV7wXKTw2.jpg",
              link: "/watch/35"
            },
            {
              title: "Hemlock Grove",
              image: "https://image.tmdb.org/t/p/w500/kjNcquOABJkOcWfUba8WT3ZBCAJ.jpg",
              link: "/watch/36"
            },
            {
              title: "The I-Land",
              image: "https://image.tmdb.org/t/p/w500/9keQMuYl9XWvUu1nXGJzL2zKQaU.jpg",
              link: "/watch/37"
            },
            {
              title: "Between",
              image: "https://image.tmdb.org/t/p/w500/oUtYZXKdpXbU5yUEoYovRQEMAdI.jpg",
              link: "/watch/38"
            },
            {
              title: "Gypsy",
              image: "https://image.tmdb.org/t/p/w500/hymOtMQVxKKFeV13ZkFWTgXLZnM.jpg",
              link: "/watch/39"
            },
            {
              title: "Everything Sucks!",
              image: "https://image.tmdb.org/t/p/w500/ae8eKJ5fsnWhXfI6FT0OVeIqhBW.jpg",
              link: "/watch/40"
            },
            {
              title: "Messiah",
              image: "https://image.tmdb.org/t/p/w500/hBShZ3HPoFvA9jwhnI1zLxODo1F.jpg",
              link: "/watch/41"
            },
            {
              title: "Vikings: Valhalla",
              image: "https://image.tmdb.org/t/p/w500/k0VmQe5ZcRzlLf8hBS0s6Z7pD1T.jpg",
              link: "/watch/42"
            }
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
