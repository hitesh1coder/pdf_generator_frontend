interface Product {
  name: string;
  quantity: number;
  rate: number;
}

interface ProductListsProps {
  products: Product[];
}

const ProductLists: React.FC<ProductListsProps> = ({ products }) => {
  return (
    <div className="w-full border-t-2 border-gray-300 dark:border-gray-700 my-4">
      <div className="flex flex-col w-full gap-5 text-center">
        <table>
          <tbody>
            <tr>
              <th>No.</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Rate</th>
            </tr>

            {products?.map((product, index) => (
              <tr className="border-b-2 border-gray-200 p-2" key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductLists;
