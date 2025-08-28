import Navbar from "../Components/Navbar";
import Cards from "../Components/Card";
import Jumbotron from "../Components/Jumbotron";
import Contents from "../Components/Group";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import { useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
    <div className="backgroundCustomImage"
    style={{
      position:'relative',
      top:0,
      left:0,
      
    }}>
      <Navbar />
      <Jumbotron />
      <Button onSearch={handleSearch} />
    </div>
      <Cards />
      <Contents searchTerm={searchTerm} />
      <Footer />
    </>
  );
};

export default Home;
