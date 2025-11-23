import '../App.css';
import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import RowPost from '../components/RowPost/RowPost';
import { favorites,actions,originals,topRated,upcoming } from "../constants";
function Guest() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <RowPost url={favorites} title="Our Favorites" />
      <RowPost url={originals} title="Netflix Originals" isSmall={true}/>
      <RowPost url={actions} title="Actions" isSmall={true}/>
      <RowPost url={topRated} title="Top Rated" isSmall={true}/>
      <RowPost url={upcoming} title="Upcoming" isSmall={true}/>
      <Footer />
    </div>
  );
}

export default Guest
