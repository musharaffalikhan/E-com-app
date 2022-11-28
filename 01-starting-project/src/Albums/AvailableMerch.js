import React from "react";
import Merch from "./Merch";

const merchArr = [
  {
    id: 5,
    title: "T-Shirt",
    price: 500,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
  },
  {
    id: 5,
    title: "Coffee Cup",
    price: 100,
    imageUrl: "	https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
  },
];

const AvailableMerch = () => {
  const merchProdList = merchArr.map((product) => (
    <Merch
      key={product.id}
      id={product.id}
      title={product.title}
      imageUrl={product.imageUrl}
      price={product.price}
    />
  ));
  return <div>
    <section>
        {merchProdList}
    </section>
  </div>;
};

export default AvailableMerch;
