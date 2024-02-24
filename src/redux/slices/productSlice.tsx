import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id?: string;
  productName: string;
  productQty: number;
  productRate: number;
}

interface ProductState {
  products: Product[];
  grandTotal: number;
}

const initialState: ProductState = {
  products: [],
  grandTotal: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      state.grandTotal +=
        action.payload.productQty * action.payload.productRate;
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const removedProduct = state.products.find(
        (product) => product.id === action.payload
      );
      if (removedProduct) {
        state.grandTotal -=
          removedProduct.productQty * removedProduct.productRate;
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      }
    },
    calculateGrandTotal: (state) => {
      state.grandTotal = state.products.reduce(
        (total, product) => total + product.productQty * product.productRate,
        0
      );
    },
  },
});

export const { addProduct, removeProduct, calculateGrandTotal } =
  productSlice.actions;
export const productReducer = productSlice.reducer;
