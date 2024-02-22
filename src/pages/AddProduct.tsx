import ProductInput from "../components/ProductInput";

export default function AddProduct() {
  return (
    <div className="w-screen h-screen flex flex-col items-center p-10 gap-4">
      <h1 className="text-3xl font-semibold text-center text-gray-800">
        Add Your <span className="text-blue-500">Products</span>
      </h1>
      <form className="w-full p-6 rounded-lg shadow-lg bg-gray-100 text-end">
        <ProductInput />
        <div className="">
          <button className="border-blue-500 border-2 rounded-xl py-1 px-4 m-3  outline-none text-blue-500 cursor-pointer">
            Add New Product
          </button>
          <button
            type="submit"
            className="bg-blue-500 rounded-xl py-2 px-4 m-3 border-none outline-none text-white cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
