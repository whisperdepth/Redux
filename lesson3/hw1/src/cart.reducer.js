import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cart.actions";

const initialValue = { products: [] };

export default (state = initialValue, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.productData),
      };

    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    default:
      return state;
  }
};
