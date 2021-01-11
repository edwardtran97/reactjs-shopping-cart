import React from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux-slide/cartSlide";

ProductList.propTypes = {};

function ProductList(props) {
  const { productList } = props;
  const dispatch = useDispatch();

  const handleAddToCartClick = (product) => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.salePrice,
      pic: product.images[0],
      quantity: 1,
    };
    const action = addToCart(item);
    dispatch(action);
  };
  return (
    <div className="container">
      <div className="row">
        <ul className="product-grid">
          {productList.map((product) => {
            return (
              <li key={product.id} className="product-grid__item-width">
                <div className="product-item">
                  <Link to={`/products/${product.id}`}>
                    <div className="product product_filter">
                      <div className="product_image">
                        <img src={product.images[0]} alt=""></img>
                      </div>
                      <div className="favorite"></div>
                      <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
                        <span>new</span>
                      </div>
                      <div className="product_info">
                        <h6 className="product_name">{product.name}</h6>
                        <div className="product_price">
                          <NumberFormat
                            value={product.salePrice}
                            displayType="text"
                            thousandSeparator={true}
                          />{" "}
                          VND
                          {product.salePrice !== product.originalPrice ? (
                            <span className="sale_price">
                              {product.originalPrice}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div
                    onClick={() => handleAddToCartClick(product)}
                    className="red_button add_to_cart_button"
                    style={{ width: "100%" }}
                  >
                    <span>add to cart</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
