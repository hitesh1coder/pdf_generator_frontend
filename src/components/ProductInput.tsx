interface ProductInputProps {
  productName: string;
  setProductName: React.Dispatch<React.SetStateAction<string>>;
  productQty: number;
  setProductQty: React.Dispatch<React.SetStateAction<number>>;
  productRate: number;
  setProductRate: React.Dispatch<React.SetStateAction<number>>;
}

const ProductInput: React.FC<ProductInputProps> = ({
  productName,
  setProductName,
  productQty,
  setProductQty,
  productRate,
  setProductRate,
}) => {
  return (
    <div className="flex justify-around">
      <div className="flex flex-col gap-1">
        <label htmlFor="product_name">Product Name :</label>
        <input
          className="py-1 px-2 border-none outline-none focus:outline-blue-400 rounded-md"
          type="text"
          name="product_name"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="product_qty">Product Quantity : </label>
        <input
          className="py-1 px-2 border-none outline-none focus:outline-blue-400 rounded-md"
          type="number"
          name="product_qty"
          placeholder="Product Quantity"
          value={productQty}
          onChange={(e) => setProductQty(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="product_rate">Product Rate : </label>
        <input
          className="py-1 px-2 border-none outline-none focus:outline-blue-400 rounded-md"
          type="number"
          name="product_rate"
          placeholder="Product Rate"
          value={productRate}
          onChange={(e) => setProductRate(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default ProductInput;
