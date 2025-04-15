import React from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = React.useState(false);

  const toggleCartStatus = () => {
    setInCart((prevInCart) => !prevInCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={inCart ? "remove" : "add"}
        onClick={toggleCartStatus}
      >
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;