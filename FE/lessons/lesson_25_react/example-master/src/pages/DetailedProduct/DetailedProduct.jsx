import React from "react";
import { useParams } from "react-router-dom";
import loaderImg from "../../assets/loader.gif";
import "./index.css";
import useFetch from "../../hooks/useFetch";

const DetailedProduct = () => {
  const { moyId } = useParams();
  const { error, loading, data: porduct } = useFetch(`/products/${moyId}`, {});

  if (loading) {
    return (
      <div className="DetailedProduct">
        <img src={loaderImg} alt="loader" />
      </div>
    );
  }

  if (!loading && error.hasError) {
    return (
      <div className="DetailedProduct">
        <h1 style={{ fontSize: 30, color: "red" }}>{error.message}</h1>
      </div>
    );
  }

  return (
    <div className="DetailedProduct">
      <h1>{porduct.title}</h1>
      <img src={porduct.images?.[0]} alt="product_img" />
    </div>
  );
};

export default DetailedProduct;
