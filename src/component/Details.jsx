import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import Design from "../component/Design";

export const Details = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
        headers: {
          "X-RapidAPI-Key":
            "c0ae563f37mshd4b90cc967d0f2bp1071f8jsnae849873a031",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        const data = response.data.data.coin;
        setCoinData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

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
        className="details-container"
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          overflow: "auto",
        }}
      >
        {coinData ? (
          <div className="main">
            <h1>{coinData.name}</h1>
            {/* <p>#{coinData.tier}</p> */}
            <img className="img" src={coinData.iconUrl} alt="crypto" />
            <p>Symbol: {coinData.symbol}</p>
            <p>Price: ${coinData.price}</p>
            <p>Price Change:$ {coinData.change}</p>
            {coinData.priceChange < 0 ? (
              <p className="coin-percent red">{coinData.priceChange}%</p>
            ) : (
              <p className="coin-percent green">{coinData.priceChange}%</p>
            )}
            <p>Market Cap: {coinData.marketCap}</p>
          </div>
        ) : (
          <p className="loading-text">Loading...</p>
        )}
      </div>
    </div>
  );
};
