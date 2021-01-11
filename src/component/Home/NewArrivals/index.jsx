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
    async function fetchCategories() {
      try {
        const categoriesApi = await categoryApi.getAll({ _limit: 10 });
        const Categories = await categoriesApi.data;
        setCategories(Categories);
      } catch (error) {
        console.log({ error });
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchProductList() {
      try {
        const params = { categoryId: ActiveCategoryId, _page: 1, _limit: 8 };
        const productsApi = await productApi.getAll(params);
        setProductList(productsApi.data);
      } catch (error) {
        console.log("Failed to fetch data: ", error.message);
      }
    }
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
