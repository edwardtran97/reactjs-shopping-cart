import React, { useEffect, useState } from "react";
import productApi from "../../api/productApi";
import Breadcrumbs from "../../component/ProductDetail/Breadcrumbs";
import Tabs from "../../component/ProductDetail/Tabs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux-slide/cartSlide";

ProductDetailPage.propTypes = {};

function ProductDetailPage(props) {
  const { match } = props;
  const [product, setProduct] = useState({});
  const [productImages, setProductImages] = useState([]);
  const dispatch = useDispatch();

  const handleAddToCartClick = (product, itemQuantity) => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.salePrice,
      pic: product.images[0],
      quantity: itemQuantity,
    };
    const action = addToCart(item);
    dispatch(action);
  };
  useEffect(() => {
    async function fetchProductList() {
      try {
        const postId = match.params.productId;
        const product = await productApi.getById(postId);
        setProduct(product);

        const productImages = product.images;
        setProductImages(productImages);
      } catch (error) {
        console.log("Failed to fetch:", error);
      }
    }
    fetchProductList();
  }, [match]);
  return (
    <div>
      <Breadcrumbs
        product={product}
        productImages={productImages}
        handleAddToCartClick={handleAddToCartClick}
      />
      <Tabs match={match} product={product} />
    </div>
  );
}

export default ProductDetailPage;
