import React from "react";
import Image from "next/image";
import { Router, useRouter } from "next/router";
export default function ProductCard(props) {
  const router = useRouter();
  const redirectTo = (id, category) => {
    router.push({
      pathname: `/product/${category}/${id}`,
    });
  };
  return (
    <div className="product-card-wrapper col-md-4 col-lg-3 col-sm-6 col-12">
      <div
        className="product"
        onClick={() => redirectTo(props.item._id, props.item.category)}
      >
        <Image
          src={props.item.imageUrl}
          width="400"
          height="400"
          alt=""
        ></Image>
        <div className="card-title">{props.item.title}</div>
        <div className="card-content">
          {props.item.description.substring(0, 50)}
          {`..."`}
        </div>
        <div className="Product-Card-Price">
          {" ₹ "}
          {props.item.variants[0].salePrice}
        </div>
        <div className="ProductAddToCart">ADD TO CART</div>
      </div>
    </div>
  );
}
