import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import categoryApi from "../../api/categoryApi";
import productApi from "../../api/productApi";
import Breadcrumbs from "../../component/Shop/Breadcrumbs";
import MainContent from "../../component/Shop/MainContent";
import SideBar from "../../component/Shop/SideBar";

ShopPage.propTypes = {};

ShopPage.defaultProps = {};

function ShopPage(props) {
  const activeCategoryId = useSelector(
    (state) => state.product.activeCategoryId
  );
  const [ActiveCategoryId, setActiveCategoryId] = useState(activeCategoryId);
  const [productList, setProductList] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 6,
    categoryId: ActiveCategoryId,
  });

  // TAKE CATEGORY LIST
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

  // TAKE PRODUCT LIST
  useEffect(() => {
    async function fetchProductList() {
      try {
        const productsApi = await productApi.getAll(filters);
        const newTotalPage = Math.ceil(
          productsApi.pagination._totalRows / productsApi.pagination._limit
        );
        setProductList(productsApi.data);
        setTotalPage(newTotalPage);
      } catch (error) {
        console.log("Failed to fetch data: ", error.message);
      }
    }
    fetchProductList();
  }, [filters]);

  const handleCategoryClick = (category) => {
    setActiveCategoryId(category.id);
    const newFilters = { ...filters, categoryId: category.id, _page: 1 };
    setFilters(newFilters);
  };

  const handleFilterClick = async (minValue, maxValue) => {
    try {
      const productsApi = await productApi.getAll({
        ...filters,
        salePrice_gte: minValue,
        salePrice_lte: maxValue,
      });
      setProductList(productsApi.data);
      const newTotalPage = Math.ceil(
        productsApi.pagination._totalRows / productsApi.pagination._limit
      );
      setTotalPage(newTotalPage);
      setFilters({
        ...filters,
        salePrice_gte: minValue,
        salePrice_lte: maxValue,
      });
    } catch (error) {
      console.log("Failed to fetch data: ", error.message);
    }
  };

  const handleProductFilter = (filterChanged) => {
    setFilters(filterChanged);
  };

  const handleNextPageClick = async () => {
    if (filters._page >= totalPage) return;
    const nextPageFilter = { ...filters, _page: filters._page + 1 };
    try {
      const productsApi = await productApi.getAll(nextPageFilter);
      setProductList(productsApi.data);
      setFilters(nextPageFilter);
    } catch (error) {
      console.log("Failed to fetch data: ", error.message);
    }
  };
  return (
    <div>
      <div className="container product_section_container">
        <div className="row">
          <div className="col product_section clearfix">
            <Breadcrumbs />

            <SideBar
              Categories={Categories}
              ActiveCategoryId={ActiveCategoryId}
              handleCategoryClick={handleCategoryClick}
              handleFilterClick={handleFilterClick}
            />

            <MainContent
              productList={productList}
              handleProductFilter={handleProductFilter}
              totalPage={totalPage}
              handleNextPageClick={handleNextPageClick}
              page={filters._page}
              filters={filters}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
