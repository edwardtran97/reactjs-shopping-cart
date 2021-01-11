import { createSlice } from "@reduxjs/toolkit";
import categoryApi from "../api/categoryApi.js";
import productApi from "../api/productApi.js";

const productSlide = createSlice({
    name: 'product',
    initialState: { 
        filters: {
            _page:1, _limit:8,
        },
        categories: [],
        activeCategoryId: '32a63859-293f-4e5b-817e-968e28bf309d',
        productList: [],
        loading: false,

     },
    reducers: {
      setUserName: (state) => {
        state.categories = [1,2,4]
      },

      getCategoryList: async (state) =>  {
        const newState = {...state};
        try {
            const categoriesApi = await categoryApi.getAll({_limit:10});
            const categories = categoriesApi.data;
            newState.categories = categories;
            return state = newState;
            
          } catch (error) {
            console.log('Failed to fetch:', error);
          };
      },

      getProductList: async (state) => {
        try {
            const params = {categoryId : state.activeCategory, ...state.filters};
            const productsApi = await productApi.getAll(params);
            state.productList = productsApi.data;
            
        } catch (error) {
            console.log('Failed to fetch data: ', error.message);
        };
      },

      setActiveCategory: (state, action) => {
        state.activeCategoryId = action.payload;

      },
    },
  });

  export const { getCategoryList, getProductList, setActiveCategory, setUserName } = productSlide.actions;
  export default productSlide;
