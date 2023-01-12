

import React, { useState } from "react";

function Item({ name, category }) {
  const [addCart, setClassList] = useState(false);

  function addToCart() {
    setClassList(!addCart);

  }
      

  return (
    <li className={addCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
