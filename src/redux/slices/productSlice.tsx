import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

interface Product {
  id?: string;
  productName: string;
  productQty: number;
  productRate: number;
}

interface ProductState {
  products: Product[];
  grandTotal: number;
  error: any;
}

const initialState: ProductState = {
  products: [],
  grandTotal: 0,
  error: null,
};
export const saveProducts = createAsyncThunk(
  "products/saveProducts",
  async (
    productsData: {
      products: ProductState["products"];
      fullName: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/products/add`,
        productsData
      );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const downloadPdf = createAsyncThunk("pdf/downloadPdf", async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/products/get-pdf`,
      {
        responseType: "blob",
      }
    );
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "page.pdf");
    document.body.appendChild(link);
    link.click();
    return true;
  } catch (error: any) {
    throw error.response.data.error;
  }
});

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
        (product) => product.productName === action.payload
      );
      if (removedProduct) {
        state.grandTotal -=
          removedProduct.productQty * removedProduct.productRate;
        state.products = state.products.filter(
          (product) => product.productName !== action.payload
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
  extraReducers: (builder) => {
    builder
      .addCase(saveProducts.pending, (state) => {
        state.error = null;
      })
      .addCase(saveProducts.fulfilled, (state) => {
        toast.success("Product added successfully");
        state.error = false;
      })
      .addCase(saveProducts.rejected, (state, action) => {
        state.error = action.payload as string;
        toast.error("something went wrong");
      });
  },
});

export const { addProduct, removeProduct, calculateGrandTotal } =
  productSlice.actions;
export const productReducer = productSlice.reducer;
