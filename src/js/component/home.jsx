import React from "react";
import Footer from "./footer.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="card-container">
        <Card />
       </div>
      <Footer />
    </div>
  );
};

export default Home;
