import React from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeItemQuantity, removeItem } from "../../redux-slide/cartSlide";
import "./Cart.css";
CartPage.propTypes = {};

function CartPage(props) {
  // const cartList = useSelector(state => state.cart.cartList);
  // const [cartTotal, setCartTotal] = useState(
  //   // useSelector((state) => state.cart.cartTotal)
  // );
  // const [cartList, setCartList] = useState(
  //   useSelector((state) => state.cart.cartList)
  // );

  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const cartList = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();

  const handleRemoveClick = (item) => {
    const itemId = item.id;
    const action = removeItem(itemId);
    dispatch(action);
  };

  const handleClickDecrement = (item) => {
    if (item.quantity === 1) return;
    const itemId = item.id;
    const itemQuantity = item.quantity - 1;
    const action = changeItemQuantity({ itemId, itemQuantity });
    dispatch(action);
  };

  const handleClickIncrement = (item) => {
    const itemId = item.id;
    const itemQuantity = item.quantity + 1;
    const action = changeItemQuantity({ itemId, itemQuantity });
    dispatch(action);
  };

  const handleChangeQuantity = (item, value) => {
    if (value < 0) return;
    const itemId = item.id;
    const itemQuantity = value;
    const action = changeItemQuantity({ itemId, itemQuantity });
    dispatch(action);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="cart-products-inner">
          <h2>Shopping Cart</h2>
          <hr />
          <ul className="cart-products__products">
            {cartList.map((item) => {
              return (
                <li key={item.id} className="cart-products__product">
                  <div className="cart-products__inner">
                    <div className="cart-products__img">
                      <img src={item.pic} alt=""></img>
                    </div>
                    <div className="cart-products__content">
                      <div className="cart-products__desc">
                        <Link
                          to={`/products/${item.id}`}
                          className="cart-products__name"
                        >
                          {" "}
                          {item.name}{" "}
                        </Link>
                        <p
                          className="cart-products__actions"
                          onClick={() => handleRemoveClick(item)}
                        >
                          <span className="cart-products__del">Xóa</span>
                        </p>
                      </div>
                      <div className="cart-products__details">
                        <div className="cart-products__pricess">
                          <p className="cart-products__real-prices">
                            <NumberFormat
                              value={item.price}
                              displayType="text"
                              thousandSeparator={true}
                            />{" "}
                            VND{" "}
                          </p>
                        </div>
                        <div className="cart-products__qty">
                          <div className="CartQty__StyledCartQty-sc-1looi6r-0 jijkkP">
                            <span
                              onClick={() => handleClickDecrement(item)}
                              className="qty-decrease qty-disable"
                            >
                              -
                            </span>
                            <input
                              onChange={(value) =>
                                handleChangeQuantity(item, value)
                              }
                              type="number"
                              name={item.name}
                              value={item.quantity}
                              className="qty-input"
                            ></input>
                            <span
                              onClick={() => handleClickIncrement(item)}
                              className="qty-increase "
                            >
                              +
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="prices">
          <p className="prices__total">
            <span className="prices__text">Thành tiền</span>
            <span className="prices__value--final">
              <NumberFormat
                value={cartTotal}
                displayType="text"
                thousandSeparator={true}
              />{" "}
              VND<i>(Đã bao gồm VAT nếu có)</i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
