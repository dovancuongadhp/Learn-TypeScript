interface Props {
  product: {
    id: number;
    name: string;
    color: string;
  }[];
}

const ListProduct = (product: Props['product']) => {
  function renderList() {
    return (
      <div>
        <ul>
          {product.map((product) => (
            <li>
              {product.id} {product.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div>
      <h1>List</h1>
      {renderList()}
    </div>
  );
};
export default ListProduct;
