import "../App.css";
import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar';
import Banner from '../components/Banner/Banner';
import RowPost from '../components/RowPost/RowPost';
import { favorites, originals, actions, topRated, upcoming } from "../constants";
import Footer from '../components/Footer/Footer';
import api from "../webservice/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthContext";
function Home() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access");

    if (!token) {
      navigate("/login");
      return;
    }

    api
      .get("/api/user/signup/")
      .then((res) => setUser(res.data))
      .catch(() => {

        handleLogout();
      });
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <RowPost title="Our Favorites" isSmall={false} url={favorites} />
      <RowPost title="Netflix Originals" isSmall={true} url={originals} />
      <RowPost title="Actions" isSmall={true} url={actions} />
      <RowPost title="Top Rated" isSmall={true} url={topRated} />
      <RowPost title="Upcoming" isSmall={true} url={upcoming} />
      <Footer />
      
    </div>

  );
}

export default Home
