import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./component/Coin";
import Design from "./component/Design";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://coinranking1.p.rapidapi.com/coins",
        headers: {
          "X-RapidAPI-Key":
            "c0ae563f37mshd4b90cc967d0f2bp1071f8jsnae849873a031",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        // console.log(66655555,response)
        setCoins(response.data.data.coins);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins?.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "auto",
      }}
    >
      <Design />
      <div
        className="coin-app"
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          overflow: "auto",
        }}
      >
        <div className="coin-search">
          <h1 className="coin-text">Search a currency</h1>
          <form>
            <input
              className="coin-input"
              type="text"
              onChange={handleChange}
              placeholder="Search"
            />
          </form>
        </div>
        <div className="coin-container">
          {filteredCoins.map((coin) => (
            <Coin data={coin} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
