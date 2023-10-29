import React, { useState } from "react";
import loaderImg from "../../assets/loader.gif";
import axios from "../../axios";
import "./index.css";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState(""); // хранить значение inputa
  const [searchResults, setSearchResults] = useState([]); // храним результат поска
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ hasError: false, message: "" });

  const handleChange = (e) => {
    // e.target.value - значение которое ввели в input
    // для того чтобы в searchValue поместит значение из инпута надо в setSearchValue передать e.target.value
    setSearchValue(e.target.value);
  };

  const handleSendRequest = async () => {
    if (searchValue.trim().length) {
      setLoading(true);
      await axios
        .get(`products/search?q=${searchValue}`)
        .then((res) => {
          setSearchResults(() => [...res.data.products]);
        })
        .catch((error) => {
          console.log({ error });
          // мы ставим setError=true для того чтоб если была ошибка то вывели конкретный кусок react-а (Something went wrong!)
          // setError(true);
          setError(() => {
            return {
              message: error.message,
              hasError: true,
            };
          });
        })
        // Отрабатывает всегда
        .finally(() => setLoading(false));
    }
  };

  if (loading) {
    return (
      <div className="wrapper">
        <img src={loaderImg} alt="loader" />
      </div>
    );
  }

  if (!loading && error.hasError) {
    return (
      <div className="wrapper">
        <h1 style={{ fontSize: 30, color: "red" }}>{error.message}</h1>
      </div>
    );
  }

  console.log(searchResults);

  return (
    <div className="SearchPage">
      <input
        type="text"
        name="searchValue"
        value={searchValue}
        onChange={handleChange}
      />
      <button disabled={!searchValue.trim().length} onClick={handleSendRequest}>
        Search
      </button>

      <div className="searchResults">
        {searchResults.map((search) => {
          const {id, images, title, realText, price} = search;
          return (
            <a href={`/product/${id}`} className="product" key={id}>
                <img className="product__img" src={images[0]} alt={title} />
                <p className="product__title">{realText}</p>
                <p className="product__price">{price}</p>
                <button className="btn">Buy Now</button>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;
