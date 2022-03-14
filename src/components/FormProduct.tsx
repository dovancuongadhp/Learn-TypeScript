import React, { ChangeEvent, FormEvent, useState } from 'react';

interface Product {
  id: number;
  name: string;
  color: string;
}
const FormProduct: React.FC = () => {
  const [product, setProduct] = useState<Product>();
  //   submit form
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string };
    };
    const name = target.name.value;
    console.log(`name product : ${name}`);
  };
  // handle Change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ width: '300px' }}>
          {/* <input
            type="text"
            className="form-control "
            placeholder="ID"
            name="id"
          /> */}
          <input
            type="text"
            className="form-control "
            placeholder="Nhập tên sản phẩm"
            name="name"
            onChange={handleChange}
          />
          {/* <input
            type="text"
            className="form-control "
            placeholder="Color"
            name="color"
          />  */}
        </div>
      </form>
    </div>
  );
};
export default FormProduct;
