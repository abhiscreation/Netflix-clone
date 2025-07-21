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
      <div className="content">
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
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
