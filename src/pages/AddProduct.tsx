import { useState } from "react";
import ProductInput from "../components/ProductInput";
import ProductLists from "../components/ProductLists";
import {
  addProduct,
  removeProduct,
  calculateGrandTotal,
} from "../redux/slices/productSlice";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [productName, setProductName] = useState<string>("");
  const [productQty, setProductQty] = useState<number>(0);
  const [productRate, setProductRate] = useState<number>(0);

  const { products } = useSelector(
    (state: RootState) => state.rootReducer.products
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddproduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (productName.trim().length > 0 && productQty > 0 && productRate > 0) {
      dispatch(addProduct({ productName, productQty, productRate }));
      dispatch(calculateGrandTotal());
      setProductName("");
      setProductQty(0);
      setProductRate(0);
    }
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/showproduct");
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center p-10 gap-4">
      <h1 className="text-3xl font-semibold text-center text-gray-800">
        Add Your <span className="text-blue-500">Products</span>
      </h1>
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-100 text-end">
        <form>
          <ProductInput
            productName={productName}
            setProductName={setProductName}
            productQty={productQty}
            setProductQty={setProductQty}
            productRate={productRate}
            setProductRate={setProductRate}
          />
        </form>

        <ProductLists />
        <div>
          <button
            onClick={handleAddproduct}
            className="border-blue-500 border-2 rounded-xl py-1 px-4 m-3  outline-none text-blue-500 cursor-pointer"
          >
            Add New Product
          </button>
          {products.length > 0 && (
            <button
              onClick={handleSaveProduct}
              type="submit"
              className="bg-blue-500 rounded-xl py-2 px-4 m-3 border-none outline-none text-white cursor-pointer"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
