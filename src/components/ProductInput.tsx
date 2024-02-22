import React from "react";

export default function ProductInput() {
  return (
    <div className="flex justify-around">
      <div className="flex flex-col gap-1">
        <label htmlFor="product_name">Product Name :</label>
        <input
          className="py-1 px-2 border-none outline-none focus:outline-blue-400 rounded-md"
          type="text"
          name="product_name"
          placeholder="Product Name"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="product_qty">Product Quantity : </label>
        <input
          className="py-1 px-2 border-none outline-none focus:outline-blue-400 rounded-md"
          type="number"
          name="product_qty"
          placeholder="Product Quantity"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="product_rate">Product Rate : </label>
        <input
          className="py-1 px-2 border-none outline-none focus:outline-blue-400 rounded-md"
          type="number"
          name="product_rate"
          placeholder="Product Rate"
        />
      </div>
      {/* 
    <div className="flex flex-col gap-1">
      <label htmlFor="GST">GST Amount :</label>
      <input
        className="py-1 px-2 border-none outline-none focus:outline-blue-400 rounded-md"
        type="text"
        name="GST"
        readOnly
        placeholder="GST Amount"
      />
    </div> */}
      <div className="flex flex-col gap-1">
        <label htmlFor="total">Total : </label>
        <input
          className="py-1 px-2 border-none outline-none focus:outline-blue-400 rounded-md"
          type="text"
          name="total"
          readOnly
          placeholder="Total"
          value={""}
        />
      </div>
    </div>
  );
}
