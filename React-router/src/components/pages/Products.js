import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Pages</h1>
      <ul>
        <Link to='/products/1'>Product 1</Link>
        <Link to='/products/2'>Product 2</Link>
        <Link to='/products/3'>Product 3</Link>
      </ul>
    </section>
  );
};

export default Products;
