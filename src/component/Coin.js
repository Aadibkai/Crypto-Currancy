import React from "react";
import "./Coin.css";
import { Link } from "react-router-dom";
const Coin = ({ data }) => {
  console.log(555, data);

  return (
    <div className="coin-container">
      <Link to={`/details/${data?.uuid}`} className="coin-row">
        <div className="coin">
          <img src={data?.iconUrl} alt="crypto" />
          <h1>{data?.name}</h1>
          <p className="coin-symbol">{data?.symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${data?.price}</p>
          <p className="coin-volume">${data?.volume}</p>

          {data?.priceChange < 0 ? (
            <p className="coin-percent red">{data?.priceChange}%</p>
          ) : (
            <p className="coin-percent green">{data?.priceChange}%</p>
          )}

          <p className="coin-marketcap">Mkt Cap: ${data?.marketcap}</p>
        </div>
      </Link>
    </div>
  );
};

export default Coin;
