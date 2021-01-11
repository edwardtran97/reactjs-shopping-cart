import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../redux-slide/cartSlide";
import "./MainContent.css";

MainContent.propTypes = {};

function MainContent(props) {
  const {
    productList,
    totalPage,
    handleNextPageClick,
    page,
    handleProductFilter,
    filters,
  } = props;
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
  const [showingProduct, setShowingProduct] = useState(6);
  const [sortingProduct, setSortingProduct] = useState("Default Sorting");
  return (
    <div>
      <div>
        <div className="main_content">
          {/* <!-- Products --> */}

          <div className="products_iso">
            <div className="row">
              <div className="col">
                {/* <!-- Product Sorting --> */}

                <div className="product_sorting_container product_sorting_container_top">
                  <ul className="product_sorting">
                    <li>
                      <span className="type_sorting_text">
                        {sortingProduct}
                      </span>
                      <i className="fa fa-angle-down"></i>
                      <ul className="sorting_type">
                        <li
                          className="type_sorting_btn"
                          onClick={() => {
                            handleProductFilter({
                              ...filters,
                              _sort: "",
                            });
                            setSortingProduct("Default Sorting");
                          }}
                        >
                          <span>Default Sorting</span>
                        </li>
                        <li
                          className="type_sorting_btn"
                          onClick={() => {
                            handleProductFilter({
                              ...filters,
                              _sort: "salePrice",
                            });
                            setSortingProduct("Price");
                          }}
                        >
                          <span>Price</span>
                        </li>
                        <li
                          className="type_sorting_btn"
                          onClick={() => {
                            handleProductFilter({ ...filters, _sort: "name" });
                            setSortingProduct("Product Name");
                          }}
                        >
                          <span>Product Name</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>Show</span>
                      <span className="num_sorting_text">{showingProduct}</span>
                      <i className="fa fa-angle-down"></i>
                      <ul className="sorting_num">
                        <li
                          className="num_sorting_btn"
                          onClick={() => {
                            handleProductFilter({ ...filters, _limit: 6 });
                            setShowingProduct(6);
                          }}
                        >
                          <span>6</span>
                        </li>
                        <li
                          className="num_sorting_btn"
                          onClick={() => {
                            handleProductFilter({ ...filters, _limit: 12 });
                            setShowingProduct(12);
                          }}
                        >
                          <span>12</span>
                        </li>
                        <li
                          className="num_sorting_btn"
                          onClick={() => {
                            handleProductFilter({ ...filters, _limit: 24 });
                            setShowingProduct(24);
                          }}
                        >
                          <span>24</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="pages d-flex flex-row align-items-center">
                    <div className="page_current">
                      <span>{page}</span>
                    </div>
                    <div className="page_total">
                      <span>of</span>
                      {totalPage}
                    </div>
                    <div
                      id="next_page"
                      className="page_next"
                      onClick={() => handleNextPageClick()}
                    >
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>

                <ul
                  className="product-grid"
                  data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'
                >
                  {productList.map((product) => {
                    return (
                      <li
                        key={product.id}
                        className="product-grid__item-width"
                        style={{ width: "33.3333%" }}
                      >
                        <div className="product-item">
                          <Link to={`/products/${product.id}`}>
                            <div className="product discount product_filter">
                              <div className="product_image">
                                <img src={product.images[0]} alt=""></img>
                              </div>
                              <div className="favorite favorite_left"></div>
                              <div className="product_info">
                                <h6 className="product_name">{product.name}</h6>
                                <div className="product_price">
                                  <NumberFormat
                                    value={product.salePrice}
                                    displayType="text"
                                    thousandSeparator={true}
                                  />{" "}
                                  VND
                                  {product.salePrice !==
                                  product.originalPrice ? (
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

                <div className="product_sorting_container product_sorting_container_bottom clearfix">
                  <ul className="product_sorting">
                    <li>
                      <span>Show:</span>
                      <span className="num_sorting_text">03</span>
                      <i className="fa fa-angle-down"></i>
                      <ul className="sorting_num">
                        <li className="num_sorting_btn">
                          <span>01</span>
                        </li>
                        <li className="num_sorting_btn">
                          <span>02</span>
                        </li>
                        <li className="num_sorting_btn">
                          <span>03</span>
                        </li>
                        <li className="num_sorting_btn">
                          <span>04</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <span className="showing_results">
                    Showing 1–3 of Item Showing results
                  </span>
                  <div className="pages d-flex flex-row align-items-center">
                    <div className="page_current">
                      <span>{page}</span>
                    </div>
                    <div className="page_total">
                      <span>of</span>
                      {totalPage}
                    </div>
                    <div
                      id="next_page_1"
                      className="page_next"
                      onClick={() => handleNextPageClick()}
                    >
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
