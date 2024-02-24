import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import deleteIcon from "../assets/icons8-delete-30.png";
import { removeProduct } from "../redux/slices/productSlice";

const ProductLists = () => {
  const { products } = useSelector(
    (state: RootState) => state.rootReducer.products
  );
  const dispatch = useDispatch();

  const calculateTotal = (qty: number, rate: number) => {
    let sum = 0;
    if (!isNaN(Number(qty)) && !isNaN(Number(rate))) {
      sum = Number(qty) * Number(rate);
    }
    return sum;
  };
  const handleRemoveProduct = (prdt: string) => {
    dispatch(removeProduct(prdt));
  };
  return (
    <div className="w-full my-4">
      <div className="flex flex-col w-full gap-5 text-center">
        <table>
          <tbody>
            <tr className="border-b-2 border-gray-200 p-2 items-center flex justify-between">
              <th>Product</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Total</th>
            </tr>

            {products?.map((product, index) => (
              <tr
                className="border-b-2 border-gray-200 p-2 flex items-center justify-between"
                key={index}
              >
                <td>{product.productName}</td>
                <td>{product.productQty}</td>
                <td>{product.productRate}</td>
                <td>
                  INR
                  {calculateTotal(product.productQty, product.productRate)}
                </td>
                <td>
                  <img
                    onClick={() => handleRemoveProduct(product.productName)}
                    className="w-4 h-4 cursor-pointer"
                    src={deleteIcon}
                    alt=""
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductLists;
