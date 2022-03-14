import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormProduct from './components/FormProduct';
import ListProduct from './components/ListProduct';
interface Data {
  product: {
    id: number;
    name: string;
    color: string;
  }[];
}
function App() {
  const [product, setProduct] = useState<Data['product']>([
    {
      id: 1,
      name: 'Iphone',
      color: 'red',
    },
    {
      id: 2,
      name: 'SAMSUNG',
      color: 'green',
    },
  ]);
  return (
    <div className="App">
      <h1>Hello</h1>
      <FormProduct></FormProduct>
    </div>
  );
}

export default App;
