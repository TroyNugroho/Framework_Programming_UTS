import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../withContext";

const ProductList = props => {
  const { products } = props.context;

  return (
    <>
      <img src="https://ecs7.tokopedia.net/img/cache/720x150/attachment/2019/5/28/3950/3950_0d433f2b-c2bb-4bf1-98dc-7f9f7a84b95c.png"
      style={{display:'flex',height:'200px',width:'100%'}}/>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                Produk Tidak Ditemukan
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);