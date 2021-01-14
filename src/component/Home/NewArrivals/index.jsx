import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CategoryMenu from "./CategoryMenu";
import categoryApi from "../../../api/categoryApi";
import "./NewArrivals.css";
import productApi from "../../../api/productApi";
import ProductList from "./ProductList";

NewArrivals.propTypes = {
  ActiveCategory: PropTypes.string.isRequired,
};

NewArrivals.defaultProps = {
  ActiveCategory: "32a63859-293f-4e5b-817e-968e28bf309d",
};

function NewArrivals(props) {
  const { ActiveCategory } = props;
  const [ActiveCategoryId, setActiveCategoryId] = useState(ActiveCategory);
  const [productList, setProductList] = useState([]);
  const [Categories, setCategories] = useState([]);
  const handleCategoryClick = (category) => {
    setActiveCategoryId(category.id);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const params = {
          _limit: 10,
        };
        const response = await categoryApi.getAll(params);
        setCategories(response.data);
      } catch (error) {
        console.log({ error });
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          categoryId: ActiveCategoryId,
          _page: 1,
          _limit: 8,
        };
        const response = await productApi.getAll(params);
        // console.log(response.data);
        setProductList(response.data);
      } catch (error) {
        console.log("Failed to fetch data: ", error.message);
      }
    };
    fetchProductList();
  }, [ActiveCategoryId]);

  return (
    <div>
      <CategoryMenu
        Categories={Categories}
        ActiveCategoryId={ActiveCategoryId}
        handleCategoryClick={handleCategoryClick}
      />

      <ProductList productList={productList} />
    </div>
  );
}

export default NewArrivals;
