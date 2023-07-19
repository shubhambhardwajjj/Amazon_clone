import React from "react";
import { useStateValue } from "./stateprovider";
const Products = ({ title, rating, id, image, price }) => {
  const [state, dispatch] = useStateValue();

  const addtocart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        rating: rating,
        image: image,
        price: price,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-des">
        <p>{title}</p>
        <small>$</small>
        <strong>{price}</strong>
      </div>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>🌟</p>
          ))}
      </div>
      <div>
        <img className="product-img" src={image} alt=""></img>
      </div>
      <div>
        <button className="product-btn" onClick={addtocart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
