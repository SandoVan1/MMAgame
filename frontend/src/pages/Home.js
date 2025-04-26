//import React from 'react';
import  './Home.css'
import Header from "./../Header.js";
// <div className="header"><Header/></div>
function Home() {
    return (
      <div className='main'>
        <h1 className="name">PROJECT<span className="MMAspan">MMA</span></h1>
        <div className="Buttons">
          <a href="/promoter"><button className="button">Promoter mode</button></a>
          <a href="/fighter"><button className="button">Career mode</button></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=ZmFcIlmmNW0&ab_channel=『胡十三⁶¹⁷』官方頻道"><button className="button">Coach mode</button></a>
        </div>
      </div>
      
    );
  }

export default Home;