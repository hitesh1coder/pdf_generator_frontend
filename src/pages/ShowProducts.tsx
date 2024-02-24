import ProductLists from "../components/ProductLists";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store.tsx";
import { downloadPdf } from "../redux/slices/productSlice.tsx";

export default function ShowProducts() {
  const { user } = useSelector((state: RootState) => state.rootReducer.user);

  const { grandTotal } = useSelector(
    (state: RootState) => state.rootReducer.products
  );
  function calculateGST(amount: number) {
    return Math.round(0.18 * amount) / 100;
  }
  const dispatch: AppDispatch = useDispatch();

  const handleDownloadPdf = async () => {
    dispatch(downloadPdf());
  };

  return (
    <div className="flex flex-col w-full h-screen bg-slate-50 p-8 items-end">
      <button
        onClick={handleDownloadPdf}
        className="bg-blue-500 rounded-xl py-2 px-4 m-3 border-none outline-none text-white cursor-pointer"
      >
        Download PDF
      </button>
      <div className="flex w-full justify-between mb-4">
        <h1 className="text-3xl font-bold text-center py-4 uppercase">
          Invoice Generator
        </h1>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-center py-4 uppercase">
            {user?.fullName}
          </h1>
          <span>{user?.email}</span>
        </div>
      </div>
      <ProductLists />
      <div className="w-80 m-6 p-4 border-t-2 border-gray-300 flex flex-col">
        <div className="w-full flex justify-between items-center p-1 font-bold">
          <p>Sub Total :</p>
          <span>INR {grandTotal}</span>
        </div>
        <div className="w-full flex justify-between items-center p-1">
          <p>GST</p>
          <span>18%</span>
        </div>
        <div className="w-full flex justify-between items-center p-1 font-bold text-xl">
          <h1>Total Amount : </h1>
          <span>{grandTotal + calculateGST(grandTotal)}</span>
        </div>
      </div>
    </div>
  );
}
