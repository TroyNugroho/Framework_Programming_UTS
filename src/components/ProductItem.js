import React from "react";

const ProductItem = props => {
  const { product } = props;
  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src={product.img}
                alt={product.shortDesc}
              />
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
            </b>
            <div>Rp.{product.price},00</div>
            <div>{product.shortDesc}</div>
            <div>{product.Lokasi}</div>
            {product.stock > 0 ? (
              <small>{"Stok " + product.stock + " Tersedia"}</small>
            ) : (
              <small className="has-text-danger">Out Of Stock</small>
            )}
            <div className="is-clearfix">
              <button
                className="button is-normal is-success   is-pulled-right"
                onClick={() =>
                  props.addToCart({
                    id: product.name,
                    product,
                    amount: 1
                  })
                }
              >
                Beli
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;